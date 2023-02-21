import React from 'react';
import { useContext, useState, useEffect } from 'react';
import GymDiaryContext from '../context/GymDiaryContext';

function ExerciseForm() {


const [exerciseName, setExerciseName] = useState('');
const [src, setSrc] = useState('')
const [alt, setAlt] = useState('')
const [imgFile, setImgFile] = useState()
const { addExerciseToList, exerciseEdit, updateExercise, modalEditActive } = useContext(GymDiaryContext)

const handleExerciseName = (e) => {
  e.preventDefault() 
  setExerciseName(e.target.value)
}

const handleExerciseImage = (e) => {
  e.preventDefault() 
  if(!imgFile){
    setSrc(e.target.value)
  } else{
    setImgFile(e.file.value)
  }
  setAlt(exerciseName)
}

// const handleImgFile = (e) => {
// e.preventDefault()
// setImgFile(e.target.value)
// } 

const handleSubmit = (e) => {
    e.preventDefault()
    if(exerciseName.trim().length > 3){
    const newExercise = {
      exerciseName,
      src,
      alt
    }

    console.log(newExercise);
    console.log(exerciseEdit);
    if(exerciseEdit.edit === true){
      updateExercise(exerciseEdit.exercise.id, newExercise)
    } else{
      addExerciseToList(newExercise)
    }
    setExerciseName('')
    setSrc('')
  }  
}

useEffect(() => {
  if(exerciseEdit.edit === true){
   setExerciseName(exerciseEdit.exercise.exerciseName)
   setSrc(exerciseEdit.exercise.src)

  }
  }, [exerciseEdit])


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {
         modalEditActive ?
         <h1>Change data if you want to edit existing exercise</h1>
         :
         <h1>Enter data if you want add new one exercise</h1>
        }
        <div className='new-exercise-adding-wrapper'>
        <input type={'text'} placeholder={'Input exercise name'}
        value={exerciseName} onChange={handleExerciseName}
        />
        <input type={'text'} placeholder={'Paste here image url'}
        value={src} onChange={handleExerciseImage}
        />
        <label for='imgFile'>Paste image file if you haven`t url</label>
        <input type={'file'} value={imgFile} onChange={(e) => setImgFile(e.file.value)} id='imgFile'/>
        <button type='submit' className='btn' style={{marginRight: "20px"}}>SEND</button>
        </div>
      </form>
    </div>
  )
}

export default ExerciseForm
