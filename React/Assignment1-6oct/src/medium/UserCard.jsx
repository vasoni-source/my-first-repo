import React from 'react'

export default function UserCard(props) {
  return (
    <div>
        <h3>UserCard</h3>
        <h4>{props.name} {props.age}</h4>
    </div>
  )
}
