import React from 'react'

function Chest() {
  return (
    <div>
      <ReturnBtn children={'TO MAIN'} to={'/'}/>
      <ReturnBtn children={'MUSCLE GROUPS'} to={'/muscle-groups/'}/>
      <h3>Here would be list of chest exercises</h3>
    </div>
  )
}

export default Chest
