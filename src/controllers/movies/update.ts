import { Response } from "express";
import { IRequest } from "../../middlewares/authenticate";
import { User } from "../../models/User";
import { RequestError } from "../../helpers";

const update = async (req: IRequest, res: Response): Promise<void>=> {
    const userId = req.user?._id;
     const { _id } = req.params;
    const {  group } = req.body;
    

      const user = await User.findOneAndUpdate(
        { _id: userId, "movies._id": _id },
        { $set: { "movies.$.group": group } },
        { new: true }
      );

      if (!user) {
          throw RequestError(401, "user not found");
      }
    res.status(200).json({
      message: "movie update",
      movies: user?.movies,
    });

}


export default update;
