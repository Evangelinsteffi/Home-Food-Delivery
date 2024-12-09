import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://E2N:12345@cluster0.vblyb.mongodb.net/food-del').then (()=>console.log("DB Connected"));
}