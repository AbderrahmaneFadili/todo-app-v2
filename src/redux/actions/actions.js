import { ADD_TODO, DELETE_TODO, SET_COMPLETED } from "../constants/constants";

//add todo action
export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

//add todo action
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
});

//add todo action
export const setCompleted = (id) => ({
  type: SET_COMPLETED,
});
