import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  //console.log(todos)
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
