import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { AppDispatch } from "../redux/store/store";
import { setIsAuth, login, logout } from "../redux/actionCreators/authAC";
import { setError } from "../redux/actionCreators/errorAC";
import { setIsLoading } from "../redux/actionCreators/isLoadingAC";
import { setUser } from "../redux/actionCreators/userAC";

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    return bindActionCreators({
        setIsAuth,
        login,
        logout,
        setError,
        setIsLoading,
        setUser,
    }, dispatch);
}