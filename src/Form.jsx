import React from 'react'

/* uncontroller component
- Uncontrolled inputs are like traditional HTML form inputs:
- You can then get their value using a ref.
- Don’t cause re-render component.
- The input value is not being managed by React.
*/

function Form() {
  const firstNameRef = React.useRef(null)

  console.log('Form rendered ---------------')

  function handleSubmit() {
    console.log('Form submitted', {
      firstName: document.getElementById('firstName').value,
      firstNameRef: firstNameRef.current.value
    })
  }

  return (
    <div>
      <h2>Form</h2>
      <form>

        <h5>Uncontroller component</h5>
        First Name: <input id="firstName" ref={firstNameRef} type="text" />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
        
    </div>
  )
}

export default Form