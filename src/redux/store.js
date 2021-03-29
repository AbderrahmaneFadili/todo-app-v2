import todosReducer from "./reducers/reducers";
import { createStore } from "redux";

const store = createStore(todosReducer);

export default store;
