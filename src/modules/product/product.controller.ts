import { Request, Response } from "express";
import { ProductService } from "./product.service";
import TProductValidationSchema from "./product.zod.validation";

const createProduct = async (req: Request, res: Response) => {

    try {
        
        const product = req.body;



        // data validation using zod

        const zodParsedData = TProductValidationSchema.parse(product)


        const result = await ProductService.createProductsIntoDB(zodParsedData);

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

// const getAllProducts = async (req: Request, res: Response) => {
//     try {
//         const result = await ProductService.getAllProductsFromDB()

//         // send response to user
//         res.status(200).json({
//             success: true,
//             message: "Products fetched successfully!",
//             data: result
//         })

//     } catch (err) {
//         console.log(err);

//     }
// }

const getAllProducts = async (req: Request, res: Response) => {
    try { // single product get start
        const query = req.query;
        const searchTerm = req?.query?.searchTerm as string;
        if (searchTerm) {
            const result = await ProductService.getAllProductsFromDB(searchTerm);

            if (!result.length) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found",
                });

            }
            res.status(200).json({
                success:true,
                message:`Products matching search term ${searchTerm} fetched successfully!`,
                data:result
            })

        }
        else if(Object.keys(query).length === 0){
            const result = await ProductService.getAllProductsFromDB(null);
            res.status(200).json({
                success:true,
                message:'Products fetched successfully!',
                data:result
            })
        }


    } catch (err) {
        console.log(err);

    }

};



// get single products by id ---------

const getSingleProducts = async (req: Request, res: Response) => {
    try {

        const { productId } = req.params;
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

        const { productId } = req.params;
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

// update product put

const updateSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        const result = await ProductService.updateProductInDB(productId, updatedData);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the product",
        });
    }
};




export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProducts,
    deleteSingleProducts,
    updateSingleProduct,
    // searchProducts

}