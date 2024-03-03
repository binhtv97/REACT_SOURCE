import React from 'react';

function ReactJSX() {
  const todos = [
    { id: 1, title: 'todo 1' },
    { id: 2, title: 'todo 2' },
    { id: 3, title: 'todo 3' },
  ]

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