import React from 'react'

/* when the component re-render?
- state change
- props change
- component parent re-render
- forceUpdate by key (forceUpdate component re-render)
*/

function Chart() {
  return (
    <div>
        chart
    </div>
  )
}

function Component() {
  const [forceUpdate, setForcUpdate] = React.useState(Date.now());

  // curry function
  // first render: memory A
  // next render: memory ???
  const forceUpdateComponent = count => () => {
    console.log('forceUpdateComponent', count)
  }

  // arrow function: button -> pass () => {} => () => forceUpdateComponent
  // curry function: button -> pass forceUpdateComponent -> () => {}

  console.log('Component render: ', forceUpdate)

  // first render: memory A
  // next render: memory A
  const handleCallback = React.useCallback(() => {
    console.log('handleCallback')
  }, [])

  return (
    <div>
      <h1>Component</h1>
      {/* <button onClick={() => {
        forceUpdateComponent(10)
      }}>Force Update</button> */}

      {/* <button onClick={forceUpdateComponent(10)}>Force Update</button> */}

      <Chart />
      
    </div>
  )
}

export default Component