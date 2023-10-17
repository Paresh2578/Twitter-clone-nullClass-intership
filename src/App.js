import React from 'react'
import {BrowserRouter  , Routes, Route } from 'react-router-dom'

//css
import './App.css';

//componets
import Home from './componets/Home/Home'
import LogIn from './componets/auth/LogIn'
import SignUp from './componets/auth/SignUp'
import ProtectedRoute from './componets/ProtectedRoute'

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} />
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/logIn' element={<LogIn/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
