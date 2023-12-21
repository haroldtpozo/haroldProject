import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let dbUrl=process.env.MONGO_URL; 
console.log("dburl",dbUrl);//Este es el enlace de la base de datos 

//Esto es un async por eso hay que hacerle una funcion 
//Luego es mejor usar un try catch por si falla y que me avise
// Luego hay que exportarlo

export const connectDB = async ()=>{
    mongoose.set("strictQuery",false);
    try {
        await mongoose.connect(dbUrl); 
        console.log("DB is connected");

    } catch (error) {
        console.log(error);
    }
    
}
