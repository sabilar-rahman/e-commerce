import { IOrder } from "./order.interface";
import { OrdersModel } from "./order.model";

// post orders
const createOrdersIntoDB = async (orders: IOrder) => {
  const result = await OrdersModel.create(orders);
  return result;
};
// get orders
// const getOrdersFromDB = async () => {
//   const result = await OrdersModel.find();
//   return result;
// };


//  get order and email same root

const getOrdersFromDB = async(email:string | null)=>{
  if(email === null){
    const result = await OrdersModel.find();
    return result;
  }
  else{
    const result = await OrdersModel.find({email})
    return result
  }

}


const getOrdersByEmail = async (email: any) => {
  const result = await OrdersModel.find({ email });
  return result;
};

export const OrdersService = {
  createOrdersIntoDB,
  getOrdersFromDB,
  getOrdersByEmail,
};
