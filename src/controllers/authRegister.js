import User from "../mongo/schemas/user.model.js"


export const register = async (req,res) =>{
    const {email,password,username} = req.body;

    try {
        const newUser = new User({
        username,
        email,
        password,
    });
    
    await newUser.save();
    res.status(201).send("registrado");
    console.log(email,password,username);
    
    } catch (error) {
        console.log(error);
    }



    

}

