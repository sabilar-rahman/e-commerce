import express, { Request, Response } from "express";
import { ProductsRoutes } from "./modules/product/product.route";
const app = express();


// Parser start---------
app.use(express.json())

// parser end----------

app.use('/api/products',ProductsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
