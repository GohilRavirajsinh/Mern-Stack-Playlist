import { useEffect } from 'react'
import React from 'react'

function Navbar({ color }) {
    // 1. Run on every render
    useEffect(() => {
        alert("I will run on every Render!")
    })

    // 2. Run only on first Render!
    useEffect(() => {
        alert("This is the first Render!")
    }, [])

    // 3. Run only when certain values change!
    useEffect(() => {
        alert("Color was Changed!")
    }, [color])

    // Example of cleanup function!
    useEffect(() => {
        alert("This is the first render of app.jsx")

        return () => {
            alert("component was unmounted")
        }
    }, [])

    return (
        <div>
            I am navbar of {color} color hehe..
        </div>
    )
}

export default Navbar