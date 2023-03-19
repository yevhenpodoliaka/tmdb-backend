import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User, IUser } from "../../models/User";
import { RequestError } from "../../helpers";

dotenv.config();

const { SECRET_KEY = "" } = process.env;

const register = async (req: Request, res: Response): Promise<void> | never => {
  const { email, password, name } = req.body;
  const user: IUser | null = await User.findOne({ email });
  if (user) {
    throw RequestError(409, `User with ${email} is already exist`);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser: IUser = await User.create({
    name,
    email,
    password: hashPassword,
  });
  const payload = {
    id: newUser._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(newUser._id, { token });
  res.status(201).json({
    name: newUser.name,
    email:newUser.email,
    token,
    movies:newUser.movies
  });
};

export default register;
