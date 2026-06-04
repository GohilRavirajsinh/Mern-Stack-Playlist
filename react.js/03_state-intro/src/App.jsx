import { useState } from 'react'


function App() {
  const [count, setCount] = useState(2)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => {setCount(count + 1)}}>increat Count</button>
      <button onClick={() => {setCount(count - 1)}}>dicresss Count</button>
      <button onClick={() => {setCount(count**2)}}>Count Square</button>
    </>
  )
}

export default App
