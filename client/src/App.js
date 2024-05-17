import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup.js';
function App() {

  const username = 'Gaurav'

  return (
    <>

      <BrowserRouter>
        <h3 style={{ textAlign: 'center' }}>Application</h3>
        <Routes>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>


    </>

  )
}

export default App