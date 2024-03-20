import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Html from './components/Html'
import Css from './components/Css'
import Javascript from './components/Javascript'
import Rect from './components/Rect'
import Sanity from './components/Sanity'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Html/>}/>
      <Route path='/css' element={<Css/>}/>
      <Route path='/javascript' element={<Javascript />}/>
      <Route path='/react' element={<Rect />}/>
      <Route path='/sanity' element={<Sanity />}/>
    </Routes>
  )
}

export default App
