import React from 'react';
import resources from './ressurser'; 

const ResourceCategory = ({ category }) => {

  const filteredResources = resources.filter(resource => resource.category === category)

  return (
    <div className='content'>
      {/* Her har chatgpt hjulpet med å finne en måte å gjøre overskriften til store bokstaver*/}
      <h3>{category.toUpperCase()}</h3>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResourceCategory;