import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  //console.log(todos)
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
