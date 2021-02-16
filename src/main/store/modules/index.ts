import { combineReducers } from "redux";

export const rootReducer = combineReducers({});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
