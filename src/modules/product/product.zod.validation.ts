import { z } from "zod";

// Define the TVariant schema
const TVariantValidationSchema = z.object({
    type: z.string({ required_error: "Variant type is required" }),
    value: z.string({ required_error: "Variant type is required" })
});

// Define the TInventory schema
const TInventoryValidationSchema = z.object({
    quantity: z.number({ required_error: "Quantity is required" }).min(0, { message: "Quantity must be a non-negative number" }),
    inStock: z.boolean({ required_error: "InStock status is required" })
});

// Define the TProduct schema
const TProductValidationSchema = z.object({
    name: z.string({ required_error: "Product name is required" }),
    description: z.string({ required_error: "Product description is required" }),
    price: z.number({ required_error: "Product price is required" }).min(0, { message: "Price must be a non-negative number" }),
    category: z.string({ required_error: "Product category is required" }),
    tags: z.array(z.string()),
    variants: z.array(TVariantValidationSchema),
    inventory: TInventoryValidationSchema
});


export default TProductValidationSchema;


