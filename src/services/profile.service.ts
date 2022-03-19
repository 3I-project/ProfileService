import axios from "axios";
import {IUser} from "../types/IUser";

class ProfileService {
    static async getUserById (id: string, token: string) : Promise<IUser> {
        try {
            const response = await axios.get(`http://localhost:5500/apiV1/auth/user/${id}`, {
                headers: {
                    authorization: token
                }
            })

            const {payload} = response.data

            return {
                login: payload.user.login,
                avatarUrl: payload.user.avatarUrl,
                first_name: payload.user.first_name,
                id_employee: payload.user.id_employee,
                id_organization: payload.user.id_organization,
                isLeader: payload.user.isLeader,
                last_name: payload.user.last_name,
                reg_date: payload.user.reg_date
            }
        } catch (e) {
            return null
        }
    }

    static async getUserMainInformation (id: string, token: string) : Promise<any> {}
}

export default ProfileService
