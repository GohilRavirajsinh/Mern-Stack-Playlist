import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey 2",
      desc: "I am a good todo 2"
    },
    {
      title: "Hey 3",
      desc: "I am a good todo 3"
    }
  ])

  // const Todo = ({todo}) => {
  //   return (<>
  // <div className="m-4 border border-1 border-purple-400">

  //   <div className="todo">{todo.title}</div>
  //   <div className="todo">{todo.desc}</div>
  // </div>
  //     </>)
  // }

  return (
    <>
      <section id="center">
        <div>
          {showbtn ? <button>Show btn is true!</button> : <button>Show btn is false!</button>}
          {/* {showbtn && <button>Show btn is true</button>} */}

          {todos.map(todo => {
            // return <Todo key={todo.title} todo={todo}/>

            return <div key={todo.title} className="m-4 border border-1 border-purple-400">

              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          })}

        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setShowbtn(!showbtn)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
