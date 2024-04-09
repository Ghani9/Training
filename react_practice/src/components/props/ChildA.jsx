import React from 'react'
import ChildB from './ChildB'

function ChildA(props) {
  return (
    <div>
      <ChildB name={props.name} />
    </div>
  )
}

export default ChildA