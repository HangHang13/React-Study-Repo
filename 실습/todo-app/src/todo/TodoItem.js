import classNames from "classnames";
import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import "./css/TodoItem.css";
import cn from "classnames";
const TodoItem = ({ todo, todoDelete, updateCheck }) => {
  const { id, title, done } = todo;

//   const [done, setTodo] = useState({
//     done: "",
//   });
  const deleteTodo = (todoId) => {
    console.log('삭제됨 : ' + todoId)
    todoDelete(todoId);
  };

  //서버쪽으로 현재 done 값의 반대논리값을 전달해야함.
  const doneCheckHandler = (id,title,done) =>{
    const data = {"title":title, "done":!done}
    updateCheck(id, data);
  }
  return (
    <li className="todo-item">
      <div className={cn("check-circle", { active: done })} onClick={()=>doneCheckHandler(id,title,done)}>
        {done && <MdDone />}
      </div>
      <span className={cn("text", { finish: done })}>{title} </span>
      <div className="remove" onClick={()=>deleteTodo(id)}> 
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
