import React from 'react'

function Triceps() {
  return (
    <div>
      <ReturnBtn children={'TO MAIN'} to={'/'}/>
      <ReturnBtn children={'MUSCLE GROUPS'} to={'/muscle-groups/'}/>
      <h3>Here would be list of triceps exercises</h3>
    </div>
  )
}

export default Triceps
