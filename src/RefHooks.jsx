import React from 'react';

/*
useRef
- A way to we can access DOM element of HTML
- Don't cause component re-render when change ref
- Keep value during component re-render

Usecase when using useRef:
- save status each other action.
- There are a few good use cases for refs in DOM element:
  - Managing focus, text selection, or media playback.
  - Triggering imperative animations.
  - Integrating with third-party DOM libraries.

forwardRef
- Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
- It can be useful for some kinds of components, especially in reusable component libraries.

useImperativeHandle 
- is a React Hook lets you customize the method exposed as a ref.
- only use with ref & forwardRef (if pass via component react)

When use?
- avoid parent component re-render
- parent component doesn't contains code logic too many
*/

const  InputComponent = React.forwardRef((_, ref) => {
  const inputRef = React.useRef(null);
  const [count, setCount] = React.useState(1);
  const [modal, setModal] = React.useState(false)
  const [lastName, setLasName] = React.useState('');

  React.useImperativeHandle(ref, () => {
    return {
      changeTitle() {
        inputRef.current.value = 'tony';
        inputRef.current.focus();
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
        setCount(prevState => prevState + 1);
      },
      openModal() {
        setModal(prevState => !prevState)
      },
      getLastName() {
        return lastName
      }
    }
  })

  function handleChangeLastName(e) {
    setLasName(e.target.value)
  }

  console.log('InputComponent')

  return (
    <>
      <input ref={inputRef} /> <br /><br />
      {count} times <br /> <br />
      Last Name <input type="text" value={lastName} onChange={handleChangeLastName} /> <br /> <br />
      Modal: {modal ? "true" : "false"}
      <br />
      <br />
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

   const handleUpdateName = () => () => {
    console.log('handleUpdateName')

   }

  function handleChangeColor() {
    boxColorRef.current.style.backgroundColor = '#f00'
    setCount(prevState => prevState + 1);
  }

  function toggleModal() {
    inputRef.current.openModal();
    const lastName = inputRef.current.getLastName();

    console.log('toggleModal: ', {
      lastName
    })
  }

  console.log('RefHooks render: ')


  return (
    <div>
      <h1>RefHooks</h1>
      Count: {count} <br /> <br />
      Stepper: {stepperRef.current} <br />
      <input ref={firstNameRef} defaultValue="Lorem Ipsum is simply dummy text of the printing" type="text" />
      <button type="button" onClick={handleUpdateName('tony')}>Update name</button> <br />

      <h3>forwardRef</h3> 
      <button type="button" onClick={handleChangeColor}>Change Color</button>
      <br /><br />
      <BoxColor count={count} ref={boxColorRef} />

      <h3>useImperativeHandle</h3>

      <InputComponent count={count} ref={inputRef}  />

      <button type="button" onClick={toggleModal}>Toggle Modal</button>
    </div>
  )
}

export default RefHooks