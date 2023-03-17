import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { RequestError } from "../helpers";
const { isValidObjectId } = mongoose;

const isValidId = (req: Request, _: Response, next: NextFunction) => {
  const { _id } = req.params;
    if (!isValidObjectId(_id)) {
     next(RequestError(400, `movieID "${_id}" is not correct`));
  }
next()
};

export default isValidId
