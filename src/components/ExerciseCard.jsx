import React from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';

function ExerciseCard({ name, src, alt, id, deleteExercise, editExercise, setModalEditActive }) {

  return (
    <div className='exercise-card-wrapper' id={id}>
      <img src={src} alt={alt} className='exercise-card-img'/>
      <div className='icon-btns-name-wrapper'>
      <p className='exercise-card-name'>{name}</p>
      <button className='edit' onClick={() => {
       editExercise()
       setModalEditActive()
      }}>
        <FaEdit color='antiquewhite'/>
      </button>
      <button className='delete' onClick={deleteExercise}>
        <FaTimes color='antiquewhite'/>
      </button>
      </div>
    </div>
  )
}

export default ExerciseCard
