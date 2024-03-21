import React from 'react'
import Nav from './Nav'
import ResourceCategory from './resouces'

const Css = () => {

  return (
    <>
    {<Nav/>}
    <div className='content'>
      <ResourceCategory category='css'/>
    </div>
    </>
  )
}

export default Css
