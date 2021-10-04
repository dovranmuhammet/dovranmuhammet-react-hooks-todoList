import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {
  // console.log(text)

  const deleteHandler = () => {
    // console.log(todo)
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }

  return (
    <div>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button type='check' onClick={completeHandler}>
        Check
      </button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default Todo
