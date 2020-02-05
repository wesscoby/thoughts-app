import express, { Request, Response } from 'express';
import session from 'express-session';
import uid from 'uid-safe';
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import passport from 'passport';
const Auth0Strategy = require('passport-auth0');

import { NODE_ENV, AUTH0_DOMAIN, AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET, CALLBACK_URL, PORT
} from './config';
import authRoutes from './auth-routes';
import thoughtsAPI from './thoughts-api';


const port = parseInt(PORT || '3000', 10);
const dev = NODE_ENV !== 'production';
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  // Express instance
  const app = express();

  //  Session management
  const sessionConfig = {
    secret: uid.sync(18),
    cookie: {
      maxAge: 86400 * 1000 // 24 hours
    },
    resave: false,
    saveUninitialized: true
  };
  app.use(session(sessionConfig));

  // Configuring Auth0Strategy
  const auth0Strategy = new Auth0Strategy(
    {
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
      clientSecret: AUTH0_CLIENT_SECRET,
      callbackURL: CALLBACK_URL
    },
    function(
      _accessToken: any, _refreshToken: any, 
      _extraParams: any, profile: any, done: any
    ) {
      return done(null, profile);
    }
  );

  // Configuring Passport
  passport.use(auth0Strategy);
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  // Adding Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Routes
  app.use(authRoutes);
  app.use(thoughtsAPI);

  // Restricting access to some routes
  const restrictAccess = (req: Request, res: Response, next: any) => {
    if (!req.isAuthenticated()) return res.redirect("/login");
    next();
  };

  app.use("/profile", restrictAccess);
  app.use("/share-thought", restrictAccess);

  // handle everything else with Next.js
  app.get("*", (req, res) => handle(req, res, parse(req.url!, true)));

  createServer(app).listen(port, () => {
    console.log(`> Server listening on port ${port}`);
  });
});
