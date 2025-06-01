import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import SignUp from './auth/SignUp'
import Home from './Home'
import SignIn from './auth/SignIn'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='signin' element={<SignIn/>}/>
    </Routes>
   
    </>
  )
}

export default App
