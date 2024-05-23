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

const getSingleProductsFromDB = async (_id: string) => {
    const result = await ProductsModel.findOne({ _id });
    return result;
  };


  const deleteProductFromDB = async (_id: string) => {
    const result = await ProductsModel.findByIdAndDelete(_id);
    return result;
};





export const ProductService ={
    createProductsIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    deleteProductFromDB


}