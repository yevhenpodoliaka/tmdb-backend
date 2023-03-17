import { Response } from "express";
import { IRequest } from "../../middlewares/authenticate";

const getCurrent = async (req: IRequest, res: Response): Promise<void> => {
  const name = req.user?.name
  const email = req.user?.email;
  const movies = req.user?.movies;

  res.json({
    user: {
      name,
      email,
      movies,
    },
  });
};

export default getCurrent;
