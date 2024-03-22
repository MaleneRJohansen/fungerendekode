import React from 'react';
import Nav from './Nav';
import ResourceCategory from './resouces'

const Html = () => {

  return (
    <>
    <Nav />
    <div className='content'>
      <ResourceCategory category='html' />
    </div>
    </>
  )
}

export default Html