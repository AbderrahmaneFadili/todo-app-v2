import { ADD_TODO, DELETE_TODO, SET_COMPLETED } from "../constants/constants";
import lodash from "lodash";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos.filter((t) => t.id !== action.id)],
      };
    }
    case SET_COMPLETED:
      return state;
    default:
      return state;
  }
};

export default todosReducer;
