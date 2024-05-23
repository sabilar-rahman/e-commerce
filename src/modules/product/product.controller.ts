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

// get single products ---------

const getSingleProducts = async (req: Request, res: Response) => {
    try {

        const {productId} = req.params;
        const result = await ProductService.getSingleProductsFromDB(productId)

        // send response to user
        res.status(200).json({
            success: true,
            message: "A sleek and powerful smartphone with cutting-edge features.",
            data: result
        })

    } catch (err) {
        console.log(err);

    }
}

// delete single product from db

const deleteSingleProducts = async (req: Request, res: Response) => {
    try {

        const {productId} = req.params;
        const result = await ProductService.deleteProductFromDB(productId)

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }


        // send response to user
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: null
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the product",
        });

    }
}







export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProducts,
    deleteSingleProducts

}