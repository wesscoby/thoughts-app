

module.exports = {
  env: {
    PORT: process.env.PORT,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    CALLBACK_URL: process.env.CALLBACK_URL,
    BASE_URL: process.env.BABEL_ENV
  }
};