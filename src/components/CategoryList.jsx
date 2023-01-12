import React from 'react';
import { muscleCategories } from './data/muscleCategories';
import CategoryCard from './CategoryCard';

function CategoryList() {

    

  return (
    <div>
      {
        muscleCategories.map((item) => (
            <CategoryCard key={item.id}
            link={item.link} src={item.src} 
            alt={item.alt} catName={item.catName}
            />
        ))
      }
    </div>
  )
}

export default CategoryList
