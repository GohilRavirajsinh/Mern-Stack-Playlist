import React from 'react'
import Component1 from './Component1'

function Button(props) {
    return (
        <div>
            <button>
                <span><Component1 count={props.count}/></span>I am a Btn
            </button>
        </div>
    )
}

export default Button