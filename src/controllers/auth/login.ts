import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User,IUser} from "../../models/User";
import { RequestError } from "../../helpers";

dotenv.config();

const {SECRET_KEY = ""} = process.env;

const login = async (req: Request, res: Response): Promise<void> | never => {
    const {email, password} = req.body;
    const user: IUser | null = await User.findOne({email});
    if(!user){
        throw RequestError(401, "Email not found");
    }
      const passwordCompare = await bcrypt.compare(password, user.password)
    if(!passwordCompare) {
        throw RequestError(401, "Password wrong");
    }
    const payload = {
        id: user._id,
    }
 
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"});
    await User.findByIdAndUpdate(user._id, {token});
    res.json({
        name:user.name
        email: user.email,
        token
    })
}

export default login;
