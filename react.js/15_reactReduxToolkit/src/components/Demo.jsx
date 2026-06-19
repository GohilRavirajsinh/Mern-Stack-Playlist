import React from 'react'
import { useSelector, useDispatch } from "react-redux"

const Demo = () => {
  const count = useSelector((state) => state.counter.value)
  
  return (
    <div>
      I am a Demo and Count is: {count}
    </div>
  )
}

export default Demo
