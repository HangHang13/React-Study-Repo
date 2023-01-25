import React, { useState } from "react";
import "./css/TodoInput.css";
import { MdAdd } from "react-icons/md";
import cn from "classnames";
const TodoInput = ({ add }) => {
  //todo-input 박스를 렌더링 할 지 여부
  const [open, setOpen] = useState(false);

  const [todo, setTodo] = useState({
    title: "",
  });

  //상태변수는 set을 사용함

  //todo-input 박스를 열고 닫는 이벤트 핸들러
  const inputToggle = (e) => {
    setOpen(!open);
  };
  //할 일 입력후 엔터치면 서버로 post 요청 이벤트 핸들러
  const todoAddHandler = (e) => {
    if (e.key === "Enter") {
      console.log("엔터 잘눌림 : " + todo);

      //부모에게 있던 험수
      add(todo);

      //입력 끝난 후 입력칸 비우기
      setTodo({
        ...todo,
        title: "",
      });
    }
  };
  const stopSubmut = (e) => e.preventDefault();
  //입력값을 실시간으로 상태변수 todo에 저장하는 체인지이벤트 핸들러
  const titleChangeHandler = (e) => {
    setTodo({
      //기존꺼 복사하고 쓰기
      ...todo,
      title: e.target.value,
    });
    console.log("잘 들어감  " + e.target.value);
    console.log("투두  " + todo.title);
  };

  const blahblahHandler = (e) => {
    setTodo({
      //기존꺼 복사하고 쓰기
      ...todo,
      text: e.target.value,
    });
  };

  return (
    <>
      {open && (
        <div className="todo-input">
          <form className="insert-form" onSubmit={stopSubmut}>
            <input
              type="text"
              placeholder="할 일을 입력 후, 엔터를 누르세요"
              autoFocus
              onKeyUp={todoAddHandler}
              onChange={titleChangeHandler}
              value={todo.title}
            />
            {/* <input
              type="text"
              placeholder="아무말이나써봐"
              onChange={blahblahHandler}
            /> */}
          </form>
        </div>
      )}
      {
        <button className={cn("begin-btn", { open })} onClick={inputToggle}>
          <MdAdd />
        </button>
      }
    </>
  );
};

export default TodoInput;
