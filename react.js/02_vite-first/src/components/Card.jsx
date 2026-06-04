import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LYQISI-unYLAFsQg_AwCDzwAhB7Ip2nk9A&s" alt="" width={230} style={{border: "2px solid red"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card