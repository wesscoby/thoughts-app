import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();
router.use(express.json());

const thoughts = [
  { _id: 123, message: "I love pepperoni pizza!", author: "unknown" },
  { _id: 456, message: "I'm watching Netflix.", author: "unknown" }
];

function ensureAuthenticated(
  req: Request, res: Response, next: NextFunction
) {
  if (req.isAuthenticated()) return next();
  res.send(401);
}

router.get("/api/thoughts", (_req, res) => {
  const orderedThoughts = thoughts.sort((t1, t2) => t2._id - t1._id);
  res.send(orderedThoughts);
});

router.post("/api/thoughts", ensureAuthenticated, (req, res) => {
  const { message } = req.body;
  const newThought = {
    _id: new Date().getTime(),
    message,
    author: req.session!.passport.user.nickname
    // author: req.user.displayName! as any
  };
  thoughts.push(newThought);
  res.send({ message: "Thanks!" });
});

export default router;