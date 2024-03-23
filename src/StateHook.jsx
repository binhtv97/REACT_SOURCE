import React from 'react';


function initializeCount() {
  console.log('initializeCount')
  return 1;
}

function StateHook() {
  // const [count, setCount] = React.useState(initializeCount);
  const [count, setCount] = React.useState(initializeCount());

  function handleIncrement() {
    // batching update
    setCount(prevState => prevState + 1);
    setCount(prevState => prevState + 1);
    setCount(prevState => prevState + 1);
  }

  console.log('stateHook')

  React.useLayoutEffect(() => {
    console.log('useLayout effect')

    return () => {
      console.log("cleanup useLayout effect")
    }
  }, [count])

  React.useEffect(() => {
    console.log('useEffect')

    return () => {
      console.log("cleanup useEffect")
    }
  }, [count])

  return (
    <div>
      <h1>State Hook</h1>
      <br />
      Count: {count}
      <button type="button" onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default StateHook