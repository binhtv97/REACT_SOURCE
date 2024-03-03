import React from 'react';

// tham trị
// tham chiếu

function State() {
  const [user, setUser] = React.useState({
      firstName: 'tony',
      lastName: 'stark',
      age: 18
    }); // memory A
  
  // merge object
  // const objA = {
  //   firstName: 'tony',
  //   lastName: 'stark'
  // }
  // const objB = {
  //   age: 18,
  //   firstName: 'peter'
  // }
  // console.log('objectC: ', Object.assign({}, objA, objB)); // es5
  // console.log('objectC: ', {  ...objB, ...objA }); // es6

  console.log('user: ', user)

  return (
    <div>
      <h1>State</h1>

      Change FirstName: 
      <input 
        type="text" 
        value={user.firstName}
        onChange={e => {
          // useState of react hook: replace object
          // setState of class component: merge object
          /* 
            replace object: replace current object by new object, (new memory address)
              - copy all properties of old object
            merge object: merge new object to current object, 
              - (keep memory address - keep properties of old object, add new properties of new object)
              - override properties if same properties
          */
          // setUser({ ...user, firstName: e.target.value })
          const object = { ...user, firstName: e.target.value };
          setUser(object)
        }} />
    </div>
  )
}

export default State