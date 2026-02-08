import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from './components/button'
import Joke from './components/joke'
function App() {
  

  return (
    <>
      <div>
        <h2>Joke Generator Using React and Joke API</h2>
        <Joke/>
      </div>
    </>
  )
}

export default App
