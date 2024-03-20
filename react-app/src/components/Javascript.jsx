import React from 'react'
import Nav from './Nav'
import ResourceCategory from './resouces'

const Javascript = () => {

  return (
    <>
    {<Nav/>}
    <div className='content'>
      <ResourceCategory category='javascript'/>
    </div>
    </>
  )
}

export default Javascript
