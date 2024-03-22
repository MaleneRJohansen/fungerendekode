import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <>
    <nav>
        <ul>
            <NavLink to='/'className='class'>HTML</NavLink>
            <NavLink to='/css'className='class'>CSS</NavLink>
            <NavLink to='/javascript'className='class'>JavaScript</NavLink>
            <NavLink to='/react'className='class'>React</NavLink>
            <NavLink to='/sanity'className='class'>Sanity and Headless CMS</NavLink>
        </ul>
    </nav>
    </>
  )
}

export default Nav
