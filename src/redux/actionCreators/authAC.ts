import { ThunkAction } from "redux-thunk";
import { AuthAction, AuthActionEnum, AuthState, SetAuthAction } from "../reducers/auth/types";
import { setIsLoading } from './isLoadingAC';
import { setError } from './errorAC';
import { IUser } from "../../models/IUser";
import { setUser } from "./userAC";

type ThunkResult<R> = ThunkAction<R, AuthState, undefined, AuthAction>;

export const setIsAuth = (auth: boolean): SetAuthAction => {
    return {
        type: AuthActionEnum.SET_IS_AUTH,
        payload: auth,
    }
};

export const login = (username: string, password: string): ThunkResult<void> => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));

        setTimeout(async () => {
            const response = await fetch('./users.json');
            const mockUsers: IUser[] = await response.json();
            const mockUser = mockUsers.find(user => user.username === username && user.password === password);

            if (mockUser) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('username', mockUser.username);

                dispatch(setIsAuth(true));
                dispatch(setUser(mockUser));
            } else {
                dispatch(setError('Некорректный логин или пароль'));
            }

            dispatch(setIsLoading(false));
        }, 1000);
    } catch (e) {
        dispatch(setError('Произошла ошибка при логине'));
    }
}

export const logout = (): ThunkResult<void> => async (dispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');

    dispatch(setUser({} as IUser));
    dispatch(setIsAuth(false));
}