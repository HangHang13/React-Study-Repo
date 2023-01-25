import React from "react";
import "./css/TodoHeader.css";

var today = new Date();

var year = today.getFullYear();
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var day = ("0" + today.getDate()).slice(-2);
var dateString = year + "년 " + month + "월 " + day + "일 ";
var week_array = new Array("일", "월", "화", "수", "목", "금", "토");
var today_num = new Date().getDay();

const TodoHeader = ({ todoList }) => {
  const undoneTodos = todoList.filter((todo) => !todo.done).length;

  return (
    <header>
      <h1>{dateString}</h1>
      <h2 className="day">{week_array[today_num]}요일</h2>
      <div className="tasks-left">할 일 {undoneTodos}개 남음</div>
    </header>
  );
};

export default TodoHeader;
