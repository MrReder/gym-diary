import React from 'react';
import { Link } from 'react-router-dom';


function Main() {
  return (
    <div>
      <h1>This is a main page which contains greetings and navigation</h1>
      <Link to={'/my-workouts/'}>My workouts</Link>
      <Link to={'/muscle-groups/'}>Watch Muscle Groups</Link>
    </div>
  )
}

export default Main
