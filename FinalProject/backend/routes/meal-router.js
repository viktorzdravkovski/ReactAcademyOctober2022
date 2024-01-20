import { Router } from "express";
import { getAll } from "../data/meal.js";

const mealRouter = new Router();
mealRouter.get("/meals", (req, res) => {
  getAll().then((data) => {
    res.json(data);
  });
});

mealRouter.post("/meals", (req, res) => {
  res.json({ message: "Success" });
});

mealRouter.get("/meals/:id", (req, res) => {
  res.json({ message: "Success" });
});

mealRouter.patch("/meals/:id", (req, res) => {
  res.json({ message: "Success" });
});

mealRouter.delete("/meals/:id", (req, res) => {
  res.json({ message: "Success" });
});

export default mealRouter;
