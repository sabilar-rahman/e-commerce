import express, { Request, Response } from "express";
import { ProductsRoutes } from "./modules/product/product.route";
import cors from "cors";
const app = express();


// Parser start---------
app.use(express.json());
app.use(cors());

// parser end----------

app.use('/api/products',ProductsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
