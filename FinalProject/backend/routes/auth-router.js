import { Router } from "express";
import { isValidEmail, isValidText } from "../util/validation.js";
import { getUser, addUser } from "../data/user.js";
import { createJSONToken, isValidPassword } from "../util/auth.js";

const authRouter = new Router();

authRouter.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let user;
  try {
    user = await getUser(email);
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed." });
  }

  const pwIsValid = await isValidPassword(password, user.password);
  if (!pwIsValid) {
    return res.status(422).json({
      message: "Invalid credentials.",
      errors: { credentials: "Invalid email or password entered." },
    });
  }

  const token = createJSONToken(email);
  const expirationTime = new Date();
  expirationTime.setHours(expirationTime.getHours() + 1);

  res.json({ token, expirationTime: expirationTime.toISOString() });
});

authRouter.post("/signup", async (req, res, next) => {
  const data = req.body;
  let errors = {};

  if (!isValidEmail(data.email)) {
    errors.email = "Invalid email.";
  } else {
    try {
      const existingUser = await getUser(data.email);
      if (existingUser) {
        errors.email = "Email exists already.";
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!isValidText(data.password, 6)) {
    errors.password = "Invalid password. Must be at least 6 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "User signup failed due to validation errors.",
      errors,
    });
  }

  try {
    const createdUser = await addUser(data);
    const authToken = createJSONToken(createdUser.email);
    res
      .status(201)
      .json({ message: "User created.", user: createdUser, token: authToken });
  } catch (error) {
    next(error);
  }
});

export default authRouter;
