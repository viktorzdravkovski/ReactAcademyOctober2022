import { Router } from "express";

const authRouter = new Router();

authRouter.post("/login", (req, res) => {
  res.json({ message: "Login success" });
});

authRouter.post("/signup", (req, res) => {
  res.json({ message: "Signup success" });
});

export default authRouter;
