import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
function App() {



  return (
    <>

      <BrowserRouter>
        <h3 style={{ textAlign: 'center' }}>Application</h3>
        <Routes>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>


    </>

  )
}

export default App