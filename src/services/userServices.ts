import marketplace from "./httpServices";
import {USERS_LINK} from "../constants/urls";
import axios from 'axios';

interface TokenResponse {
    access_token: string;
    expires_in: number;
    hd?: string;
    prompt: string;
    token_type: string;
    scope: string;
    state?: string;
    error_description?: string;
    error_uri?: string;
}

export const loginInUser = async (tokenResponse: TokenResponse) => {
    try {
        const {data} = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`
                }
            }
        )
        return data.email;

    } catch (err) {
        console.log(err);
        return null
    }
};

export const createUser = async (email: string) => {
    return await marketplace.get(`${USERS_LINK}`, {
        params: {
            email,
        }
    });
};
