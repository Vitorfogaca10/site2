import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './index.jsx'
import Login from './login.jsx'



  function App() {


    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
        </Routes>

      </BrowserRouter>
    )
  }

export default App
