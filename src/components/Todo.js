import React from 'react'

const Todo = ({ text }) => {
  console.log(text)
  return (
    <div>
      <li>{text}</li>
      <button type='check'>Check</button>
      <button>Delete</button>
    </div>
  )
}

export default Todo
