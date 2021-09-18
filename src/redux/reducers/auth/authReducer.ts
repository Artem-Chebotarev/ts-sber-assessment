import initState from "../../initState";
import { AuthAction, AuthActionEnum, AuthState } from "./types";

const authReducer = (state = initState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: false,
            }

        case AuthActionEnum.SET_USER:
            return {
                ...state,
                user: action.payload,
            }

        case AuthActionEnum.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }

        case AuthActionEnum.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state;
    }
};

export default authReducer;