import React from 'react'

function Card({ 
  title, 
  description = 'This is card 1', 
  children, 
  component: Component, 
  component2,
  ...restProps
}) {
  console.log('card: ', {
    title,
    description,
    Component,
    component2,
    restProps: restProps
  })

  return (
    <div className='green'>
      {children}
      <br />
      Demo: props is react component: <Component /> <br/>
      component2: {component2} <br />
 
    </div>
  )
}

export default Card