import express, { Request, Response } from "express";
import { Products } from "./product.model";

const router = express.Router()


router.post('/', async (req: Request, res: Response) => {
    const result = await Products.create(req.body);
    // Products from model

    res.json({
        success: true,
        message: "Product created successfully!",
        data: result
    })
});



export const ProductsRoutes = router;