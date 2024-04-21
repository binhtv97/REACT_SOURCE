import React from 'react'

function ReactPortal() {
  const [error, setError] = React.useState(0);
  
  return (
    <div>
      <h1>ReactPortal</h1>
      {error}

      <h2>Test Error Boundaries</h2>
      <button type="button" onClick={() => setError({ isOpen: true })}>Test error</button>
    </div>
  )
}

export default ReactPortal