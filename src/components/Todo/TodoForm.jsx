import React from 'react'
import Button from '../Button';

function TodoForm({ handleAddTodo }) {
  const [text, setText] = React.useState('');

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)}/> <Button onClick={() => handleAddTodo(text)} />
    </div>
  )
}

export default TodoForm