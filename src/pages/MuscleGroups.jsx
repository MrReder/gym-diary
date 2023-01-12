import React from 'react';
import CategoryList from '../components/CategoryList';
import ReturnBtn from '../components/ReturnBtn';

function MuscleGroups() {
  return (
    <div>
      <ReturnBtn children={'TO MAIN'} to={'/'}/>
      <h2>Exercises divided by muscle groups</h2>
      <CategoryList />
    </div>
  )
}

export default MuscleGroups
