import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    // setCounter(counter + 1)
    if (counter >= 20) {
      setCounter(20)
    }
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if (counter <= 0) {
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
