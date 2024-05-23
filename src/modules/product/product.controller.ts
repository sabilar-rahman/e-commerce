import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {

    try {
        const product = req.body;

        const result = await ProductService.createProductsIntoDB(product);

        // send response to user
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })

    } catch (err) {
        console.log(err);

    }


}

// get all products

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getAllProductsFromDB()

        // send response to user
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })

    } catch (err) {
        console.log(err);

    }
}





export const ProductController = {
    createProduct,
    getAllProducts,

}