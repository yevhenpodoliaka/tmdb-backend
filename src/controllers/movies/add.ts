import { Response } from "express";
import { IRequest } from "../../middlewares/authenticate";
import { IMovie, User } from "../../models/User";

const add = async (req: IRequest, res: Response): Promise<void> => {
  const userId = req.user?._id;

  const { movieId, group } = req.body;
  const newMovie: IMovie = { movieId, group };

  const user = await User.findByIdAndUpdate(
    userId,
    { $push: { movies: newMovie } },
    { new: true }
  );

  res.json({ movies: user?.movies });
};

export default add;
