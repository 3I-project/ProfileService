import axios from "axios";
import {IIdea, IPersonalInformation, Types} from "../types/types";

import { db } from '../db/connection';

class ProfileService {
    static async getUserById (id: string, token: string) : Promise<Types> {
        try {
            const response = await axios.get(`http://localhost:5500/apiV1/auth/user/${id}`, {
                headers: {
                    authorization: token
                }
            })

            const {payload} = response.data

            return {
                login: payload.user.login,
                avatarUrl: payload.user.avatarHash,
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

    static async getProfilePosts (id: string, token: string) : Promise<IIdea[]> {
        const response = await axios.get(`http://localhost:5500/apiV1/idea/user-posts/${id}`, {
            headers: {
                authorization: token
            }
        })

        return response.data.payload.ideas;
    }

    static async getProfilePersonalInformation (id_user: string) : Promise<IPersonalInformation> {
        try {
            const queryString = `SELECT * FROM personalinformation WHERE user_id=${id_user}`;
            const result = await db.query(queryString);

            const data = result.rows[0]

            return {
                user_id: data.user_id,
                education: data.education,
                date_birth: data.date_birth,
                about: data.about
            }
        } catch (e) {
            return null
        }
    }

    static async updateProfilePersonalInformation (payload: IPersonalInformation) : Promise<boolean> {
        try {
            const queryString = `
            INSERT INTO personalinformation VALUES ($1, $2, $3, $4) 
            ON CONFLICT (user_id) DO UPDATE SET user_id=$1, education=$2, date_birth=$3, about=$4
        `
            await db.query(queryString, [payload.user_id, payload.education, payload.date_birth, payload.about]);

            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }
}

export default ProfileService
