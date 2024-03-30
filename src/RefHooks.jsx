import React from 'react';

/*
  - useRef
      - access html element in jsx
      - save state during component re-reder
      - don't cause component re-reder
  - forwardRef
  - useImperativeHandle
*/

function RefHooks() {
   const firstNameRef = React.useRef(null);
   const stepperRef = React.useRef(0);
   const [count, setCount] = React.useState(0);

   function handleUpdateName() {
    console.log('firstNameRef:',firstNameRef)
    // firstNameRef.current.focus();
    // firstNameRef.current.setSelectionRange(0, firstNameRef.current.value.length)

    // setCount(prevState => prevState + 1);
    stepperRef.current = stepperRef.current + 2
   }


  return (
    <div>
      <h1>RefHooks</h1>
      Count: {count} <br /> <br />
      Stepper: {stepperRef.current} <br />
      <input ref={firstNameRef} defaultValue="Lorem Ipsum is simply dummy text of the printing" type="text" />
      <button type="button" onClick={handleUpdateName}>Update name</button>
    </div>
  )
}

export default RefHooks