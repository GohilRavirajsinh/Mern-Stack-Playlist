import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/Context'

function Button() {
    const btnContext = useContext(counterContext)
    
    return (
        <div>
            <button onClick={() => btnContext.setCount((count) => count + 1)}>
                I am Btn
                <span><Component1 /></span>
            </button>
        </div>
    )
}

export default Button