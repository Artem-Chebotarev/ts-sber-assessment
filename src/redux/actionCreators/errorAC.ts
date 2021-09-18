import { AuthActionEnum, SetErrorAction } from "../reducers/auth/types";

export const setError = (error: string): SetErrorAction => {
    return {
        type: AuthActionEnum.SET_ERROR,
        payload: error,
    }
};