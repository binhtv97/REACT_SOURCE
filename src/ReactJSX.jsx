import React from 'react';
import { useSelector } from 'react-redux';

function ReactJSX() {
  const todos = useSelector(state => state.todo.todos);

  const renderName = todos.map((todo, index) => {
    return (
      <React.Fragment key={index}>
        <div>Id: {todo.id}</div>
        <div>Title: {todo.title}</div>
      </React.Fragment>
    )
  })  

  function renderTitle() {
    return <h5>hello, word</h5>
  }

  return (
    <div>
      <h3>JSX</h3>
      {renderName}
      {renderTitle()}
    </div>
  )
}

export default ReactJSX