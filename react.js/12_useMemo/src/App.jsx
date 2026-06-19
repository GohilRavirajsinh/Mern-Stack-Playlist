import { useState, useMemo } from 'react'

const nums = new Array(30_000_00).fill("Goku").map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_00
  }
})
// console.log(nums)

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(nums)

  // const magical = number.find(item => item.isMagical === true)  // Expensive Computation `pura component rerender hota hai`
  const magical = useMemo(() => 
    number.find(item => item.isMagical === true
    ), [number])

  return (
    <>
      <span>Magical number is {magical.index}</span>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => {
            setCount((count) => count + 1)
            if (count == 10) {
              setNumber(new Array(10_000_00).fill("Goku").map((_, i) => {
                return {
                  index: i,
                  isMagical: i === 9_000_00
                }
              }))
            }
          }}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
