import React from 'react'
import Nav from './Nav'
import ResourceCategory from './resouces'

const Rect = () => {
  
  return (
    <>
    {<Nav/>}
    <div className='content'>
      <ResourceCategory category='react'/>
    </div>
    </>
  )
}

export default Rect
