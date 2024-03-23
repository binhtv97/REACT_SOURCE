import React from 'react'

/* uncontroller component
- Uncontrolled inputs are like traditional HTML form inputs:
- The input value is not being managed by React.
- You can then get their value using a ref.
- Don’t cause re-render component.

controller component
- Controlled inputs are managed by state React.
- The input will be re-rendered every time the state changes.
*/

function Form() {
  const firstNameRef = React.useRef(null);
  const [lastName, setLastName] = React.useState(undefined);
  const [form, setForm] = React.useState({
    age: '',
    lastName: ''
  })

  console.log('Form rendered ---------------', form)

  function handleSubmit() {
    console.log('Form submitted', {
      firstName: document.getElementById('firstName').value,
      firstNameRef: firstNameRef.current.value,
      lastName
    })
  }

  function onChangeForm(event){
    const { name, value } = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  ///
  return (
    <div>
      <h2>Form</h2>
      <form>

        <h5>Uncontroller component</h5>
        First Name: 
        <input id="firstName" ref={firstNameRef} type="text" defaultValue="tony" />


        <h5>Controller component</h5>
        Age:
        <input 
          name="age"
          id="age" 
          type="text" 
          value={form.age}
          onChange={onChangeForm} 
        /> <br />
        Last Name: 
        <input 
          id="lastName" 
          name="lastName"
          type="text" 
          value={form.lastName}
          onChange={onChangeForm} 
        />

        <br />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
        
    </div>
  )
}

export default Form