import {Router} from "express";
import  {register} from "../controllers/authRegister.js"
import {login} from "../controllers/authLogin.js"

const router = Router();
router.post("/register", register);

router.post("/login",login);

export default router;