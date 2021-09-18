import { AuthActionEnum, SetIsLoadingAction } from "../reducers/auth/types";

export const setIsLoading = (isLoading: boolean): SetIsLoadingAction => {
    return {
        type: AuthActionEnum.SET_IS_LOADING,
        payload: isLoading,
    }
};