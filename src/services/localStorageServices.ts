import {USER_KEY} from "../constants/storageKeys";
import {fromJson, toJson} from "../helpers/helpers";
import {ROLE_PROVIDER} from "../constants/userRoles";
import {UserInterface} from "../types/user.types";

export const setUser = (user: UserInterface) => {
    sessionStorage.setItem(USER_KEY, toJson(user));
};
export const getUser = (): UserInterface | null => {
    const user = sessionStorage.getItem(USER_KEY);
    return user ? fromJson(user) as UserInterface : null;
};
export const deleteUser = () => {
    sessionStorage.removeItem(USER_KEY);
};