import express, { Request, Response } from "express";
import { OrdersController } from "./order.controller";

const router = express.Router()

router.post('/',OrdersController.createOrder);

router.get('/',OrdersController.getAllOrders);

router.get('/orders?email=',OrdersController.getOrdersByEmail);





export const OrderRoutes = router;