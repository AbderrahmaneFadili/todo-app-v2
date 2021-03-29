import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
} from "../constants/constants";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    //add todo
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }

    //delete todo
    case DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos.filter((t) => t.id !== action.id)],
      };
    }
    //toggle completed
    case TOGGLE_COMPLETED: {
      const todo = state.todos.find((t) => t.id === action.id);
      todo.completed = !todo.completed;
      state.todos.forEach((t) => {
        if (t.id === todo.id) {
          t = todo;
        }
      });
      return {
        ...state,
        todos: state.todos,
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
