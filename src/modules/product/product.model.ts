import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

// Define the TVariant schema
const TVariantSchema = new Schema<TVariant>({
    type: {
        type: String,
        required: true,
        
    },
    value: {
        type: String,
        required: true,

    }
});

// Define the TInventory schema
const TInventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: true,

    },
    inStock: {
        type: Boolean,
        required: true,

    }
});

// Define the TProduct schema
const TProductSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,

    },
    category: {
        type: String,
        required: true,

    },
    tags: {
        type: [String],

    },
    variants: {
        type: [TVariantSchema],

    },
    inventory: {
        type: TInventorySchema,

    }
});



export const ProductsModel = model<TProduct>("Products", TProductSchema)

