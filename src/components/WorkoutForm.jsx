import React, { useState, useContext } from 'react';
import GymDiaryContext from '../context/GymDiaryContext';
import { IoIosAddCircleOutline } from 'react-icons/io';

function WorkoutForm() {

  const [date, setDate] = useState('');
  const [numberOfDay, setNumberOfDay] = useState(0);
  const [typeWeek, setTypeWeek] = useState('light');
  const [typeSubWeek, setTypeSubWeek] = useState('light');
  const [workouts, setWorkouts] = useState([
    {
      exerciseName: '',
      sets: [
        {
          weight: '',
          reps: ''
        }
      ]
    }]);

  const { isCycling, setIsCycling } = useContext(GymDiaryContext)

  const handleDate = (e) => {
    e.preventDefault()
    setDate(e.target.value)
  }

  const handleNumberOfDay = (e) => {
    e.preventDefault()
    setNumberOfDay(e.target.value)
  }

  const handleYesCycling = (e) => {
    setIsCycling(true)
  }

  const handleNoCycling = (e) => {
    setIsCycling(false)
  }

  const handleWeekType = (e) => {
    e.preventDefault()
    setTypeWeek(e.target.value)
  }

  const handleSubWeekType = (e) => {
    e.preventDefault()
    setTypeSubWeek(e.target.value)

  }

  const handleExerciseNameChange = (e, index) => {
    const newWorkouts = [...workouts];
    newWorkouts[index].exerciseName = e.target.value;
    setWorkouts(newWorkouts);
  };

  const handleWeightChange = (e, workoutIndex, index) => {
    const newWorkouts = [...workouts];
    newWorkouts[workoutIndex].sets[index].weight = +e.target.value;
    setWorkouts(newWorkouts);
  };

  const handleRepsChange = (e, workoutIndex, index) => {
  const newWorkouts = [...workouts];
  newWorkouts[workoutIndex].sets[index].reps = +e.target.value;
  setWorkouts(newWorkouts);
};

const handleAddExercise = (e) => {
  e.preventDefault()
  setWorkouts([...workouts, {
    exerciseName: '', 
    sets: [{
      weight: '',
      reps: ''
    }]}]);
};

  const handleAddSet = (index, e) => {
    e.preventDefault()
    const newSet = {weight: '', reps: ''};
    const newWorkouts = [...workouts];
    newWorkouts[index].sets.push(newSet);
    setWorkouts(newWorkouts);
  };


  

  return (
    <div className='workout-form-wrapper'>
     <form className='workout-form'>
      <div>
      <label htmlFor='workout-date' className='date-placholder'>Choose your workouts date</label>
      <input type={'date'} id='workout-date' value={date} onChange={handleDate}/> 
      </div>
      <div>
      <label htmlFor='number-of-day'>Number of your workout-day per current week</label>
      <input type={'number'} value={numberOfDay} onChange={handleNumberOfDay}
      id='number-of-day'/>
      </div>
      <p>Do you use periodisation?</p>
      <div className='cycling-wrapper'>
      <label htmlFor='yes'>Yes</label>
      <input type={'radio'} onChange={handleYesCycling}
      value={isCycling} name='cycling' id='yes' defaultChecked={true} />
      <label htmlFor='no'>No</label>
      <input type={'radio'} onChange={handleNoCycling}
      value={isCycling} name='cycling' id='no'/>
      </div>
      {
        isCycling ? <>
        <p>Choose difficult type and subtype of your training week:</p>
        <select value={typeWeek} onChange={handleWeekType}>
        <option disabled>Week type</option>
        <option value={'light'}>Light</option>
        <option value={'middle'}>Middle</option>
        <option value={'hard'}>Hard</option>
        </select>
        <select value={typeSubWeek} onChange={handleSubWeekType}>
        <option disabled>SubWeek type</option>
        <option value={'light'}>Light</option>
        <option value={'middle'}>Middle</option>
        <option value={'hard'}>Hard</option>
        </select>
        </>  : null
      }
      
      <div className='exercises-inputs'>
      {workouts.map((workout, index) => (
  <div key={index}>
    <p>Exercise №{index + 1}</p>
    <input
      type="text"
      placeholder="Enter exercise name"
      value={workout.exerciseName}
      onChange={(e) => handleExerciseNameChange(e, index)}
    />
   {workout.sets.map((set, setIndex) => (
        <div key={setIndex}>
          <p>Set №{setIndex + 1}</p>
          <input
            type="number"
            placeholder="Kgs/Lbs"
            value={set.weight}
            onChange={(e) => handleWeightChange(e, index, setIndex)}
          />
          <input
            type="number"
            placeholder="Reps"
            value={set.reps}
            onChange={(e) => handleRepsChange(e, index, setIndex)}
          />
          <button onClick={(e) => handleAddSet(index, e)}>Add Set</button>
        </div>
      ))}
  </div>
  
))}
<button onClick={handleAddExercise}>Add Exercise</button>
      </div>
     </form>
    </div>
  )
}

export default WorkoutForm
