import express, { Request, Response } from "express";
import { ProductsModel } from "./product.model";
import { ProductController } from "./product.controller";

const router = express.Router()


router.post('/',ProductController.createProduct);

router.get('/',ProductController.getAllProducts);

router.get('/:productId',ProductController.getSingleProducts)
router.delete('/:productId',ProductController.deleteSingleProducts)


export const ProductsRoutes = router;