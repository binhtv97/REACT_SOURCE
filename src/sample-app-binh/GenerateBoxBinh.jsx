import React from 'react'
import { useAppContext } from '../context/AppContext'

function GenerateBoxBinh() {
  const { timestamp } = useAppContext();

  console.log('GenerateBoxBinh render')

  function generaBox() {
   
  }
  return (
    <div>
      <h1>Sample App - GenerateBox - Binh</h1>
    </div>
  )
}

export default GenerateBoxBinh