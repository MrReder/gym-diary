import React from 'react'

function Back() {
  return (
    <div>
      <ReturnBtn children={'TO MAIN'} to={'/'}/>
      <ReturnBtn children={'MUSCLE GROUPS'} to={'/muscle-groups/'}/>
      <h3>Here would be list of back exercises</h3>
    </div>
  )
}

export default Back
