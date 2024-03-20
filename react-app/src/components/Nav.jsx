import React from 'react'
import { NavLink } from "react-router-dom"
import Html from './Html'
import Css from './Css'
import Javascript from './Javascript'
import Sanity from './Sanity'
import Rect from './Rect'


const Nav = () => {
  return (
    <>
    <nav>
        <ul>
            <NavLink to='/'>HTML</NavLink>
            <NavLink to='/css'>CSS</NavLink>
            <NavLink to='/javascript'>JavaScript</NavLink>
            <NavLink to='/react'>React</NavLink>
            <NavLink to='/sanity'>Sanity</NavLink>
        </ul>
    </nav>
    </>
  )
}

export default Nav
