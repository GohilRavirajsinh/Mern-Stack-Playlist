import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterProvider value={{count, setCount}}>
        <Navbar />
        <section id="center">
          <div className="hero">
          </div>
          <div>
            <h1>Get started</h1>
            <p>
              Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
            </p>
          </div>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </section>
      </counterProvider>
    </>
  )
}

export default App
