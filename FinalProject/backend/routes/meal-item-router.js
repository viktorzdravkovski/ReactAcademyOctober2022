import { Router } from "express";

const mealItemRouter = new Router();

mealItemRouter.get("/meal-item", (req, res) => {
  res.json({ message: "Success" });
});

mealItemRouter.post("/meal-item", (req, res) => {
  res.json({ message: "Success" });
});

mealItemRouter.get("/meal-item/:id", (req, res) => {
  res.json({ message: "Success" });
});

mealItemRouter.patch("/meal-item/:id", (req, res) => {
  res.json({ message: "Success" });
});

mealItemRouter.delete("/meal-item/:id", (req, res) => {
  res.json({ message: "Success" });
});

export default mealItemRouter;
