import Demo from "./components/Demo"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, multiplBy, incrementByAmount } from "./redux/counter/counterSlice"

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Demo/>
      <div>
        <button onClick={() => {dispatch(decrement())}}>-</button>
        Currently count is {count}
        <button onClick={() => {dispatch(increment())}}>+</button>
        <br/>
        <button onClick={() => {dispatch(incrementByAmount(4))}}>+ = 4</button>
        Currently count is {count}
        <button onClick={() => {dispatch(multiplBy())}}>*</button>
      </div>
    </>
  )
}

export default App
