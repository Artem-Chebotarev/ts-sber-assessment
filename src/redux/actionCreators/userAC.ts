import { IUser } from "../../models/IUser";
import { AuthActionEnum, SetUserAction } from "../reducers/auth/types";

export const setUser = (user: IUser): SetUserAction => {
    return {
        type: AuthActionEnum.SET_USER,
        payload: user,
    }
};