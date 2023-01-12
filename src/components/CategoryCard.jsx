import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ link, src, alt, catName }) {
  return (
    <div>
      <Link to={link}>
      <img src={src} alt={alt}/>
      <span>{catName}</span>
      </Link>
    </div>
  )
}

export default CategoryCard
