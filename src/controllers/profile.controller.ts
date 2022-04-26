import {Request} from "express";
import ProfileService from "../services/profile.service"
import {Types} from "../types/types";

class ProfileController {

    static async getProfile (req: Request, res): Promise<Types> {
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

        const posts = await ProfileService.getProfilePosts(id, token);
        const personalInformation = await ProfileService.getProfilePersonalInformation(id);

        return res.status(200).json({
            status: true,
            payload: {
                user,
                posts,
                personalInformation
            }
        })
    }

    static async updatePersonalInformation (req: Request, res) {
        const { payload } = req.body;
        if (!payload) {
            return res.status(400).json({
                status: false,
                payload: {
                    message: 'payload empty!'
                }
            })
        }

        const status = await ProfileService.updateProfilePersonalInformation(payload);

        return res.status(200).json({
            status: true,
            payload: {
                success: status
            }
        })
    }
}

module.exports = {
    ProfileController
}
