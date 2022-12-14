import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { delete_todo } from "../redux/actions/todoActions";

const TodoItem = ({ id, text, completed }) => {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(delete_todo(id));
  };
  // const handleEdit = (id) => {
  //    text-decoration: line-through;
  // };

  return (
    <div className="todo-list">
      <h2 className="todoText">{text}</h2>
      {text ? (
        <span>
          <BsFillTrashFill onClick={() => handleDelete(id)} />
        </span>
      ) : null}
    </div>
  );
};

export default TodoItem;
