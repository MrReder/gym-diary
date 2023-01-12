import React from 'react'

function LegsAndGlutes() {
  return (
    <div>
      <ReturnBtn children={'TO MAIN'} to={'/'}/>
      <ReturnBtn children={'MUSCLE GROUPS'} to={'/muscle-groups/'}/>
      <h3>Here would be list of legs and glutes exercises</h3>
    </div>
  )
}

export default LegsAndGlutes
