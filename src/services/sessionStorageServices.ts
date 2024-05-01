import {fromJson, toJson} from "../helpers/helpers";
import {SESSION_KEY} from "../constants/storageKeys";

interface SessionInterface {
    accessToken?: string;
    refreshToken?: string;
}

export const setSession = <T extends {}>(session: T) => {
    sessionStorage.setItem(SESSION_KEY, toJson(session));
};
export const getAccessToken = () => {
    const session = fromJson<SessionInterface>(sessionStorage.getItem(SESSION_KEY));
    return session ? session.accessToken : '';
};

export const getRefreshToken = () => {
    const session = fromJson<SessionInterface>(sessionStorage.getItem(SESSION_KEY));
    return session ? session.refreshToken : '';
};

export const deleteSession = () => {
    sessionStorage.removeItem(SESSION_KEY);
};
