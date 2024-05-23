import { TProduct } from "./product.interface";
import { ProductsModel } from "./product.model";

const createProductsIntoDB = async(product:TProduct)=>{
    const result = await ProductsModel.create(product);
    return result;
}

const getAllProductsFromDB = async()=>{
    const result = await ProductsModel.find();
    return result;
}


export const ProductService ={
    createProductsIntoDB,
    getAllProductsFromDB,

}