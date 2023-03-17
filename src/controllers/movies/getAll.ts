import { Response } from "express"
import { IRequest } from "../../middlewares/authenticate"
import { User, IUser } from "../../models/User"
import { RequestError } from "../../helpers";

const getAll = async (req: IRequest, res: Response): Promise<void>=>{ 
    const userId = req.user?._id
    const user: IUser|null = await User.findOne({ _id: userId })
           if (!user) {
             throw RequestError(401, "user not found");
           }
    res.json({
        movies:user?.movies
    })

}
export default getAll