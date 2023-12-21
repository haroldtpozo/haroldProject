import User from "../mongo/schemas/user.model.js"


export const login = async (req,res) =>{
    const {email,password} = req.body;
    try {
        const userFound = await User.findOne({email})
        if (!userFound) {
            return res.status(400).json({message:"User not found"});}

        if (password === userFound.password){
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