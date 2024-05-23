import express, { Request, Response } from "express";
import { ProductsModel } from "./product.model";
import { ProductController } from "./product.controller";

const router = express.Router()


router.post('/',ProductController.createProduct);

router.get('/',ProductController.getAllProducts);


export const ProductsRoutes = router;