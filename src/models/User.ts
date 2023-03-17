import mongoose from "mongoose";
import Joi from "joi";
import handleSaveErrors from "../helpers/handleSaveErrors"

export interface IMovie{
  movieId:string 
  group:"watched"|"favorites"|"queued"
}
export interface IUser extends mongoose.Document {

  name: string;
  email: string;
  password: string;
  token: string;
  movies: IMovie[];
}

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Set password for user"],
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: 6,
    },
    movies: [
      {
        movieId: {
          type: String ,
          required:true,
        },
        group: {
          type: String,
          enum: ["watched", "favorites", "queued"],
          required:true,
        }
      },
    ],
    token: { type: String, default: "" },
  },
  { versionKey: false, timestamps: true }
);
UserSchema.post("save", handleSaveErrors);

export const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
});
export const movieSchema = Joi.object({
  movieId: Joi.string().required(),
  group: Joi.string().valid("watched", "favorites", "queued"),
});



export const User = mongoose.model<IUser>("User", UserSchema);
