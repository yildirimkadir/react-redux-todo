import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ id, text, completed }) => {
  return (
    <div className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <BsFillTrashFill />
        </span>
        <span>
          <AiFillEdit />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
