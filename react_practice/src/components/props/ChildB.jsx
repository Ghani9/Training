import React from 'react'
import ChildC from './ChildC'

function ChildB(props) {
  return (
    <div>
      <ChildC name={props.name}/>
    </div>
  )
}

export default ChildB