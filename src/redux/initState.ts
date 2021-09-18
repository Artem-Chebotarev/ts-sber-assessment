import { IUser } from "../models/IUser";
import { AuthState } from "./reducers/auth/types";

const isAuthLS = localStorage.getItem('auth');
const userLS = localStorage.getItem('user');

let isAuthParse;

if (typeof isAuthLS === 'string') {
    isAuthParse = JSON.parse(isAuthLS);
}

let userParse;

if (typeof userLS === 'string') {
    userParse = JSON.parse(userLS);
}

const initState: AuthState = {
    isAuth: isAuthParse ? isAuthParse : false,
    user: userParse ? {username: userParse} as IUser : {} as IUser,
    error: '',
    isLoading: false,
}

export default initState;