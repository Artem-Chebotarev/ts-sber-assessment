import { IUser } from "../models/IUser";
import { AuthState } from "./reducers/auth/types";

const initState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    error: '',
    isLoading: false,
}

export default initState;