import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AuthAction, AuthState } from "../reducers/auth/types";
import rootReducer from "../reducers/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AuthState, AuthAction>));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;