import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <>
    <nav>
        <ul>
            <NavLink to='/'>HTML</NavLink>
            <NavLink to='/css'>CSS</NavLink>
            <NavLink to='/javascript'>JavaScript</NavLink>
            <NavLink to='/react'>React</NavLink>
            <NavLink to='/sanity'>Sanity and Headless CMS</NavLink>
        </ul>
    </nav>
    </>
  )
}

export default Nav
