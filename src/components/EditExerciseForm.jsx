import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import GymDiaryContext from '../context/GymDiaryContext';

function EditExerciseForm() {

const [exerciseName, setExerciseName] = useState('');
const [file, setFile] = useState()
const [src, setSrc] = useState('')
const [alt, setAlt] = useState('')

 const { updateExercise } = useContext(GymDiaryContext);

 const handleSrc = (e) => {
    e.preventDefault()
    setSrc(e.target.value)
 }

 const handleFile = (e) => {
    e.preventDefault()
    setFile(e.target.value)
 }

 const handleName = (e) => {
    e.preventDefault()
    setExerciseName(e.target.value)
    setAlt(exerciseName)
 }

    const handleSubmit = (e) => {
        e.preventDefault()
        const editedExercise = {
          exerciseName,
          src,
          alt
        } 
        console.log(editedExercise);
        updateExercise(editedExercise)
        setExerciseName('')
        setSrc('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Edit exercise</h3>
      <input type={'text'} placeholder={'Enter url of exercise image'} 
      style={{marginBottom: '0'}} value={src} onChange={handleSrc}
      /> <span>OR</span>
      <div className='paste-image-wrapper'>
      <label htmlFor="upload-image">Paste image</label>
      <input type={"file"} id="upload-image" className='paste-input' 
      onChange={handleFile} value={file}/>
      </div>
      <input type={"text"} placeholder="Edit exercise name"
      onChange={handleName} value={exerciseName}/>
      <button
      type='submit'
      style={{boxShadow: '0 5px 5px 5px black', alignSelf: 'center'}}
      className='btn'>
        ADD
      </button>
    </form>
  )
}

export default EditExerciseForm
