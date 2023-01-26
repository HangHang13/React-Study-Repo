import React, { useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

//css로딩
import "./css/TodoCss.css";
import { Spinner } from "reactstrap";
import { BASE_URL, TODO} from "../config/host-config";

const TodoTemplate = () => {


  const API_BASE_URL = BASE_URL + TODO;
  


  //로딩중 상태
  const [loading, setLoading] = useState(true);

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
      .then((res) => 
        {
        if (res.status===403){
          alert("로그인이 필요한 서비스입니다.")
          return;
        }else if (res.status===500){
          alert("서버에러입니다.")
          return;
        }
      
        return res.json();
        })
      .then((res) => {
        setTodos(res.todos);
        
        //로딩완료처리
        setLoading(false);
      });
    // dispatch(todoListGet)
  }, []);
  //로딩중일때 보여줄 태그
  const loadingPage = (
    <div className="loading">
      <Spinner color="success">
        Loading....
      </Spinner>
    </div>


  );


  //로딩완료시 보여줄 태그
  const viewPage = (
    <div className="todo-template">
      <TodoHeader todoList={todos} />
      <TodoMain todoList={todos} todoDelete={deleteTodo} updateCheck={updateCheck}/>
      <TodoInput add={addTodo} />
    </div>
  );


  return (
    <>
      {loading ? loadingPage : viewPage}
    </>
    
  );
};

export default TodoTemplate;
