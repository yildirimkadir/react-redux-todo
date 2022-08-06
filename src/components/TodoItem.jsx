import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ id, text, completed }) => {
  const handleDelete = () => {};
  const handleEdit = () => {};

  return (
    <div className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <BsFillTrashFill onClick={handleDelete} />
        </span>
        <span>
          <AiFillEdit onClick={handleEdit} />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
