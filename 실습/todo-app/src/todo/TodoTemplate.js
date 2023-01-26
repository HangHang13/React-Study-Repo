import React, { useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

//css로딩
import "./css/TodoCss.css";

const TodoTemplate = () => {

  const API_BASE_URL = "http://localhost:8080/api/todos/";

  const [todos, setTodos] = useState([]);
  //할일 등록 서버요청
  const addTodo = (todo) => {
    fetch(API_BASE_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((res) => {
        setTodos(res.todos);
      });
  };
  //할일 삭제 요청
  const deleteTodo = (todoId) => {
    fetch(API_BASE_URL + `${todoId}`, {
      method: "DELETE",
      
    })
      .then((res) => res.json())
      .then((res) => {
        setTodos(res.todos);
      });
  };
  //할일 완료 체크
  const updateCheck = (todoId, data) => {
    

    fetch(API_BASE_URL + `${todoId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setTodos(res.todos);
      });
  };

  useEffect(() => {
    fetch(API_BASE_URL)
      .then((res) => res.json())
      .then((res) => {
        setTodos(res.todos);
      });
    // dispatch(todoListGet)
  }, []);
  return (
    <div className="todo-template">
      <TodoHeader todoList={todos} />
      <TodoMain todoList={todos} todoDelete={deleteTodo} updateCheck={updateCheck}/>
      <TodoInput add={addTodo} />
    </div>
  );
};

export default TodoTemplate;
