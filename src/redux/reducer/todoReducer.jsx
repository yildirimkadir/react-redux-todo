import React from "react";
import { ADD, DELETE, EDIT } from "../types/todoTypes";

const initialState = {
  todoList: [
    {
      id: "",
      text: "",
      completed: "",
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
    // case EDIT:
    //   const edited = state.todoList.filter((item) => item.id === payload).map((item)=>({text: payload}) )
    //   return {
    //     todoList: edited
    //   };
    case DELETE:
      const filtered = state.todoList.filter((item) => item.id !== payload);
      return {
        todoList: filtered,
      };

    default:
      return state;
  }
};

export default todoReducer;
