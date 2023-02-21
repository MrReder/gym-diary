import React from 'react'
import { useContext } from 'react'
import GymDiaryContext from '../context/GymDiaryContext'



function WorkoutCard({ props }) {

    const { date, numberOfDay, typeWeek, typeSubWeek, countOfSets,
    id, countOfExercise, countOfWeightQuantity, 
    exercise, number, weight, quantity, weightValue, quantityValue, valuesOfWeightQuantity } = props;

    const { isCycling } = useContext(GymDiaryContext)


  return (
    <div className='workout-wrapper' id={id}>
      <header className='workout-header'>
       <span>{date}</span>/<h1>Day {numberOfDay}</h1>/ 
       {
        isCycling ? <h3>{typeWeek}-{typeSubWeek} week</h3> : <h3>Workout without load cycling</h3>
       }
      </header>
      <div className='top-panel-wrapper'>
        <div className='number-and-exercise-name-wrapper'>
        <span className='number-exercise'>№</span>
        <p className='exercise-name-field'>Exercise</p>
        </div>
       <div className='sets-weights-quantity-wrapper'>
        <p className='sets'>Sets</p>
        {
            countOfSets.map(item => {
              return  <p key={item.number}>{item.number}</p>
            })
        }
        {
            countOfWeightQuantity.map(item => {
               return <p key={item.id}>
                    <span>{item.weight}</span>/<span>{item.quantity}</span>
                </p>
            })
        }
       </div>
      </div>
      <div className='count-exercise-field'>
      <span className='count-exercise'>{countOfExercise}</span>
      <p className='exercise'>{exercise}</p>
      {
        valuesOfWeightQuantity.map(item => {
          return  <p key={item.id}>
            <span>{item.weightValue}</span>/<span>{item.quantityValue}</span>
            </p>
        })
      }
      </div>

    </div>
  )
}

export default WorkoutCard
