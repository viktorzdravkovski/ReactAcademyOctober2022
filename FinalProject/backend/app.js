import express from "express";
import MealRouter from "./routes/meal-router.js";
import MealItemRouter from "./routes/meal-item-router.js";
import AuthRouter from "./routes/auth-router.js";

const app = express();

app.use(AuthRouter);
app.use(MealRouter);
app.use(MealItemRouter);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
