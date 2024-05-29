import express, { Request, Response } from "express";
import { ProductsRoutes } from "./modules/product/product.route";
import cors from "cors";
import { OrderRoutes } from "./modules/order/order.route";
const app = express();

// Parser start---------
app.use(express.json());
app.use(cors());

// parser end----------

app.use("/api/products", ProductsRoutes);

app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
