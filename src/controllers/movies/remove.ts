import { Response } from "express";
import { IRequest } from "../../middlewares/authenticate";
import { User } from "../../models/User";
import { RequestError } from "../../helpers";



const remove = async (req: IRequest, res: Response): Promise<void> => {
    const userId = req.user?._id;
    const { _id } = req.params;

    const user = await User.findByIdAndUpdate(
        userId ,
      { $pull: { movies: { _id: _id } } },
      { new: true }
    );
       if (!user) {
         throw RequestError(401, "user not found");
       }
    res.status(200).json({
        message: "movie deleted",
        movies:user?.movies
       
    });
}

export default remove











