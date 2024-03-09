import React from 'react'

import TodoCount from './components/Todo/TodoCount';
import TodoList from './components/Todo/TodoList';
import TodoForm from './components/Todo/TodoForm';

function LiftingStateUp() {
	const [todos, setTodos] = React.useState([])

	function handleAddTodo(text) {
		if(!text) return;
		const item = {
			id: Date.now(),
			text
		}

		setTodos([...todos, item]);
	}

	function handleDelete(todoId) {
		setTodos(prevState => prevState.filter(todo => todo.id !== todoId));
	}

  return (
    <div>
			<h1>Lifting State Up</h1>

			<TodoForm handleAddTodo={handleAddTodo} />

			<TodoCount todos={todos} />

			<TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  )
}

export default LiftingStateUp