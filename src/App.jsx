import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Userform from './components/User/Form'
import UserListing from './components/User/UserListing'

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Userform/>
      </div>
    </React.StrictMode>
    
  )
}

export default App
