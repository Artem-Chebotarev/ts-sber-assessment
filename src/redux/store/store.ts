import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import initState from "../initState";
import rootReducer from "../reducers/rootReducer";

export const store = createStore(rootReducer, initState(), applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;