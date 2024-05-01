import {UserRoles} from "../constants/userRoles";

export interface UserInterface {
    email: undefined | string,
    role: UserRoles
}