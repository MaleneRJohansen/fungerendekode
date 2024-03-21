import React from 'react'
import Nav from './Nav'
import ResourceCategory from './resouces'

const Sanity = () => {

  return (
    <>
    {<Nav/>}
    <div className='content'>
      <ResourceCategory category='headless-cms'/>
    </div>
    </>
  )
}

export default Sanity
