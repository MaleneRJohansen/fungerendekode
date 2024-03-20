import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Nav />}/>
      <Route path='/css' element={<Nav />}/>
      <Route path='/javascript' element={<Nav />}/>
      <Route path='/react' element={<Nav />}/>
      <Route path='/sanity' element={<Nav />}/>
    </Routes>
  )
}

export default App
