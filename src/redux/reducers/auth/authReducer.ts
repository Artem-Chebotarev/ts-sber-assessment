import initState from "../../initState";
import { AuthAction, AuthActionEnum, AuthState } from "./types";

const authReducer = (state = initState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
            }
        default:
            return state;
    }
};

export default authReducer;