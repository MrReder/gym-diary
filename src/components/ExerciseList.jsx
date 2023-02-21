import React from 'react';
import ExerciseCard from './ExerciseCard';
import { useContext } from 'react';
import GymDiaryContext from '../context/GymDiaryContext';
import Modal from './Modal';
import ExerciseForm from './ExerciseForm';

function ExerciseList({ exercisesArr }) {

  const { deleteExerciseFromList, editExercise, modalEditActive, setModalEditActive } = useContext(GymDiaryContext)
  console.log(modalEditActive);

  return modalEditActive ? 
  (<Modal
  children={<ExerciseForm />}
  />)
   :
  (
    <div className='exercises-list'>
      {
        (exercisesArr ?? []).map(exercise => {
            return <ExerciseCard 
            key={exercise.id}
            name={exercise.exerciseName}
            src={exercise.src}
            alt={exercise.alt}
            deleteExercise={() => deleteExerciseFromList(exercise.id)}
            editExercise={() => editExercise(exercise)}
            setModalEditActive={() => setModalEditActive(true)}
            />
        })
      }
    </div>
  )
}

export default ExerciseList
