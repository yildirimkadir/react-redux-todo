import { ADD, DELETE, EDIT } from "../types/todoTypes";

export const add_todo = (payload) => {
  return { type: ADD, payload: payload };
};
export const edit_todo = (payload) => {
  return { type: EDIT, payload: payload };
};
export const delete_todo = (payload) => {
  return { type: DELETE, payload: payload };
};
