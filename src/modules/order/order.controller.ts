import { Request, Response } from "express";
import { OrdersService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orders = req.body;
    const result = await OrdersService.createOrdersIntoDB(orders);

    // send response to user
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrdersService.getOrdersFromDB();

    // send response to user
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


const getOrdersByEmail = async (req: Request, res: Response) => {
  const email = req.query.email;

  if (!email) {
      return res.status(400).json({
          success: false,
          message: 'Email query parameter is required'
      });
  }

  try {
      const orders = await OrdersService.getOrdersByEmail(email);

      return res.status(200).json({
          success: true,
          message: 'Orders fetched successfully for user email!',
          data: orders
      });
  } catch (err) {
      console.log(err);
  }
};


// 




export const OrdersController = {
  createOrder,
  getAllOrders,
  getOrdersByEmail
};
