import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import productRoutes from "./routes/ProductRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import { errorHandler, notFound } from "./middleware/ErrorMiddleware.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
