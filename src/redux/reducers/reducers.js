import { ADD_TODO, DELETE_TODO, SET_COMPLETED } from "../constants/constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { id: uuidv4(), title: "Eate..", completed: true },
    { id: uuidv4(), title: "Coding..", completed: true },
    { id: uuidv4(), title: "Training..", completed: false },
  ],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state;
    case DELETE_TODO:
      return state;
    case SET_COMPLETED:
      return state;
    default:
      return state;
  }
};

export default todosReducer;
