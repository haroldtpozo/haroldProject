import User from "../mongo/schemas/user.model.js"
import bcrypt from "bcrypt";

export const register = async (req,res) =>{
    try {
    const {email,password,username} = req.body;
    if (email === "" || password === "" || username === "" ) {
        return res.status(400).send("Colocar...")
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const emailVal=emailRegex.test(email)
    if (!emailVal) {
        return res.status(400).send("Email no valido")
    }
    const emailFound= await User.findOne({email})
    if (emailFound) {
        return res.status(400).send("Email ya en uso");
    }

    const salt = bcrypt.genSaltSync(10)
    const encryptedPass = bcrypt.hashSync(password,salt)

    console.log(salt,encryptedPass)
    //const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

        const newUser = new User({
        username,
        email,
        password,
    });
    
    await newUser.save();
    res.status(201).send("registrado");
    console.log(email,password,username);
    
    } catch (error) {
        return res.status(400).send("Ha ocurrido un error inesperado");
    }



    

}

