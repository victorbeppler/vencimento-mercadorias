import { config } from "dotenv";
import mongoose from "mongoose";
config()

const mongoUrl = process.env.mongoUrl
export async function configurarMongo() {
    await mongoose.connect(mongoUrl);
    console.log("Mongo conectado com sucesso");
}