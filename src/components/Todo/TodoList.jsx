import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, handleDelete }) {
  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {todos.map((todo) => <TodoItem todo={todo} handleDelete={handleDelete} />)}
      </ul>
    </div>
  )
}

export default TodoList