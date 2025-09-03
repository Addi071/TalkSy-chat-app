import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    home
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes></BrowserRouter>
      
    </>
  )
}

export default App
