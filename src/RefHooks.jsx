import React from 'react';

/*
  - useRef
      - access html element in jsx
      - save state during component re-reder
      - don't cause component re-reder
  - forwardRef
      - use forwardRef when you pass ref through react component
  - useImperativeHandle
*/

const  InputComponent = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null);
  const [count, setCount] = React.useState(1);

  React.useImperativeHandle(ref, () => {
    return {
      changeTitle() {
        inputRef.current.value = 'tony';
        inputRef.current.focus();
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
        setCount(prevState => prevState + 1);
      }
    }
  })

  console.log('InputComponent')

  return (
    <>
      <input ref={inputRef} />
      {count} times
    </>
  )
})


const BoxColor = React.forwardRef(({ count }, ref) => {
  return (
    <div ref={ref} className='boxColor'>
      background {count} times
    </div>
  )
})

function RefHooks() {
   const firstNameRef = React.useRef(null);
   const stepperRef = React.useRef(0);
   const [count, setCount] = React.useState(0);
   const boxColorRef = React.useRef();
   const inputRef = React.useRef(null);

   function handleUpdateName() {
    // console.log('firstNameRef:',firstNameRef)
    // firstNameRef.current.focus();
    // firstNameRef.current.setSelectionRange(0, firstNameRef.current.value.length)

    // setCount(prevState => prevState + 1);
    stepperRef.current = stepperRef.current + 2;

    inputRef.current.changeTitle()
   }

  function handleChangeColor() {
    boxColorRef.current.style.backgroundColor = '#f00'
    setCount(prevState => prevState + 1);
  }

  console.log('RefHooks render: ')


  return (
    <div>
      <h1>RefHooks</h1>
      Count: {count} <br /> <br />
      Stepper: {stepperRef.current} <br />
      <input ref={firstNameRef} defaultValue="Lorem Ipsum is simply dummy text of the printing" type="text" />
      <button type="button" onClick={handleUpdateName}>Update name</button> <br />

      <h3>forwardRef</h3> 
      <button type="button" onClick={handleChangeColor}>Change Color</button>
      <br /><br />
      <BoxColor count={count} ref={boxColorRef} />

      <h3>useImperativeHandle</h3>

      <InputComponent ref={inputRef} />
    </div>
  )
}

export default RefHooks