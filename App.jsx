import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/home'
import Cadastro from './pages/cadastro-cliente/index.jsx'
import Cliente from './pages/login-cliente/index.jsx'



  function App() {


    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/login' element={<Cliente />}/>
        </Routes>

      </BrowserRouter>
    )
  }

export default App
