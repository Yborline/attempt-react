import { createStore, applyMiddleware, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { counterReducer } from "./counter/counter-reducer";
import todosReducer from "./todos/todos-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);
export default store;
