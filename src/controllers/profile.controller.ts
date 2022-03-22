import {Request} from "express";
import ProfileService from "../services/profile.service"
import {IUser} from "../types/IUser";

class ProfileController {

    static async getProfile (req: Request, res): Promise<IUser> {
        const { id } = req.params
        const token = req.headers.authorization

        const user = await ProfileService.getUserById(id, token)

        if (!user) {
            return res.status(400).json({
                status: false,
                payload: {
                    message: 'User not fount'
                }
            })
        }

        return res.status(200).json({
            status: true,
            payload: {
                user
            }
        })
    }
}

module.exports = {
    ProfileController
}
