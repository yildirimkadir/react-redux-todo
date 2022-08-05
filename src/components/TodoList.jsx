import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todoList);

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
