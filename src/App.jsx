import { useState } from 'react'
import './App.css'
import ColorBox from './ColorBox'

function App() {

  return (
    <>
      <ColorBox colors={[
        '#FF5733', // Coral
        '#3498DB', // Dodger Blue
        '#2ECC71', // Emerald Green
        '#F39C12', // Orange
        '#8E44AD', // Wisteria Purple
        '#E74C3C', // Alizarin Red
        '#1ABC9C', // Turquoise
        '#D35400', // Pumpkin Orange
        '#2C3E50'  // Midnight Blue
      ]} />
    </>
  )
}

export default App
