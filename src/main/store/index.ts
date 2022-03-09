import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./modules";

const storeEnhancer = composeWithDevTools || compose;
const middlewares = [thunkMiddleware];

export const store = createStore(
  rootReducer,
  storeEnhancer(applyMiddleware(...middlewares))
);

export default store;

export type RootStateDef = ReturnType<typeof rootReducer>;
