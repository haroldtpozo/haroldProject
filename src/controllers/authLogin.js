import User from "../mongo/schemas/user.model.js"
import bcrypt from "bcrypt"


export const login = async (req,res) =>{
    
    try {
        const {email,password} = req.body;
        if (email === "" || password === "") {
            return res.status(400).send("Colocar...")
        }
        const userFound = await User.findOne({email})
        if (!userFound) {
            return res.status(400).json({message:"User not found"});}

        const valPassword = bcrypt.compareSync(password, userFound.password);
    
        if (valPassword){
            return res.status(200).json({message:"Login sucessful"}) 
        } else{
            return res.status(400).json({message:"Incorrect password"})
        }

    } 
    
    catch (error) {
        console.error(error)
        return res.status(500).json({message:"Internal Server Error"})
        
    }
};