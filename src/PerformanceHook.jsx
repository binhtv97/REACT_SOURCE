import React, { useCallback } from 'react'

// function customEqual(prevProps, nextProps) {
//   console.log("custom equal ", {
//     prevProps,
//     nextProps
//   })
//   return prevProps.person.lastName === nextProps.person.lastName
// }

const Card = React.memo(function({ person, handleForceUpdate }) {
  console.log('card: ')
  return (
    <div> this is card: {person.lastName} </div>
  )
})

function PerformanceHook() {
  const [forceUpdate, setForceUpdate] = React.useState(Date.now());
  const [person, setPerson] = React.useState({
    lastName: 'tony',
    firstName: 'nguyen'
  }); // memory A

  // useCallback: memories function
  const handleForceUpdate = useCallback(() => {
    setForceUpdate(Date.now())
  }, [])

  // useMemo: memorized value
  const total = React.useMemo(() => {
    return [1,2,3,4,5].reduce((acc, curr) => acc + curr);
  }, [])

  // // re-created fucntion every component re-render
  // function handleForceUpdate() {
    
  // }

  console.log('PerformanceHook: ')

  return (
    <div>
      <h2>PerformanceHook</h2>
      Time: {forceUpdate} <br /> <br />
      Total: {total} <br />

      <Card person={person} handleForceUpdate={handleForceUpdate} /> <br />

      <button type="button" 
        onClick={() => {
          setForceUpdate(Date.now())
        }}
      >
        Force Update
      </button>
      <button type="button" 
        onClick={() => {
          setPerson(prevState => ({
            ...prevState,
            firstName: `tony ${Date.now()}`
          })) // memory xxx
        }}
      >
        Update First Name
      </button>
      <button type="button" 
        onClick={() => {
          setPerson(prevState => ({
            ...prevState,
            lastName: `tony ${Date.now()}`
          }))
        }}
      >
        Update Last Name
      </button>
    </div>
  )
}

export default PerformanceHook