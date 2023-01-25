import React from "react";
import "./css/TodoMain.css";
import TodoItem from "./TodoItem.js";

const TodoMain = ({ todoList, todoDelete, updateCheck }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todoDelete={todoDelete} updateCheck={updateCheck}/>
      ))}
    </ul>
  );
};

export default TodoMain;
