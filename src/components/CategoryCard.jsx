import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ link, src, alt, catName }) {
  return (
    <div className='category-card-wrapper'>
      <Link to={link}>
      <img src={src} alt={alt} 
      style={{width: '75px', height: '75px', display: 'block', margin: 'auto'}}/>
      <span>{catName}</span>
      </Link>
    </div>
  )
}

export default CategoryCard
