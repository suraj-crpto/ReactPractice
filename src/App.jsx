import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Userform from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Userform/>
    </div>
  )
}

export default App
