import { z } from "zod";

// Define the IOrder Zod schema
const OrderValidationSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }), // Ensuring it's a valid email
    productId: z.string({ required_error: "Product ID is required" }),
    price: z.number({ required_error: "Price is required" }).min(0, { message: "Price must be a non-negative number" }),
    quantity: z.number()
});

// Export the Order Zod schema
export default OrderValidationSchema ;
