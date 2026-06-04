import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const a = useRef(0)       // 1st use for 

  // useEffect(() => {
  //   a.current += 1
  // console.log(`Rerendering and the value of a is ${a.current}`) 
  // })

  const btnRef = useRef()      // 2nd use for kisibhi dom element ko access kar sakte hai refName.current krke

  useEffect(() => {
  console.log(`First Rerendering..`) 
  btnRef.current.style.backgroundColor = "red"
  })

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          ref = {btnRef}      // useRef 2nd Using here
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p></p>
        {/* // 2nd useRef here also */}
        <button onClick={() => (btnRef.current.style.display = "none")}>Change me</button>  
      </section>
    </>
  )
}

export default App
