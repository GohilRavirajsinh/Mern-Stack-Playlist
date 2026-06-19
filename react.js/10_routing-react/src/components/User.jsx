import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams()
  return (
    <div>
      Online User is : {params.username}
    </div>
  )
}

export default User
