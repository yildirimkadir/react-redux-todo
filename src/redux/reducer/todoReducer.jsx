import React from "react";
import { ADD, DELETE, EDIT } from "../types/todoTypes";

const initialState = {
  todoList: [
    {
      id: new Date().getTime(),
      text: "",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case EDIT:
      return {};
    case DELETE:
      return state.todoList.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
};

export default todoReducer;
