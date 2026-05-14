import express from "express";
import { Router } from "express";
import userRouter from "./routes/users.js";
import router from "./routes/index.js";
import productRouter from "./routes/productRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", router);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
