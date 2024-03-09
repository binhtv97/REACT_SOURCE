import React from 'react'
import Button from '../Button'

function TodoItem({ todo, handleDelete }) {
  return (
    <li key={todo.id}>
      {todo.text}
        <Button text="Delete" onClick={() => handleDelete(todo.id)} />
    </li>
  )
}

export default TodoItem