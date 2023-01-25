import React from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoMain from './TodoMain'


//css로딩

import './css/TodoCss.css'

const TodoTemplate = () => {
  return (
    <div className="todo-template">
        <TodoHeader/>
        <TodoMain/>
        <TodoInput/>

    </div>
  )
}

export default TodoTemplate