import mongoose from "mongoose";

//Aqui se crea la forma en que irán mis datos a la base de datos:
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true, // Esto hace que le quite los espacios ..asad.. tanto de delante como detrás.
    },
    email:{
        type:String,
        required:true,
        unique:true, //Esto es para decir que cada vez que se agrefe un mail este sea unico y evite que se repita.
    },
    password:{
        type:String,
        required:true,
    }
})

const User = mongoose.model("user",userSchema)

export default User;