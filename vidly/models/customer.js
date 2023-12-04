import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true,
            minlength: 5, 
            maxlenght: 50,
        },
        isGold: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            required: true,
            minlength: 10,
            maxlenght: 12,
        },      
    }
);

export const Customer = mongoose.model('Customer', customerSchema);
