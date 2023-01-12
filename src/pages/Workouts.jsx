import React from 'react';
import ReturnBtn from '../components/ReturnBtn';

function Workouts() {
  return (
    <div>
      <ReturnBtn children={'TO MAIN'} to={'/'}/>
      <h1>Here we will se list of our workouts</h1>
    </div>
  )
}

export default Workouts
