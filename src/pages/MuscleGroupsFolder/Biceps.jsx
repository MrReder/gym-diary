import React from 'react'

function Biceps() {
  return (
    <div>
      <ReturnBtn children={'TO MAIN'} to={'/'}/>
      <ReturnBtn children={'MUSCLE GROUPS'} to={'/muscle-groups/'}/>
      <h3>Here would be list of biceps exercises</h3>
    </div>
  )
}

export default Biceps
