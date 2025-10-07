import React from 'react'

export default function ChildParent(props) {
  return (
    <div>
        <h3>Child-Parent communication</h3>
        <button onClick={props.handleUpdateNum}>Change Number</button>
    </div>
  )
}
