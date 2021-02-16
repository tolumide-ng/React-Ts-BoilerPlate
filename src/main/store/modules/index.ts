import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
