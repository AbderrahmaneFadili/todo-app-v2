import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
} from "../constants/constants";

//add todo action
export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

//delte todo action
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

//set compeleted todo action
export const toggleCompleted = (id) => ({
  type: TOGGLE_COMPLETED,
  id,
});
