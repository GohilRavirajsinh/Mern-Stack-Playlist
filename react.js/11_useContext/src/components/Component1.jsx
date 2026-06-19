import React, { useContext } from 'react'
import { counterContext } from '../context/Context'

function Component1() {
  const compValue = useContext(counterContext)
  
  return (
    <div>
      {compValue.count}
    </div>
  )
}

export default Component1