import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem('todos'))
      setTodos(todos)
    }
  }, [])


  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLocalStorage()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLocalStorage()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLocalStoragesaveToLocalStorage()
  }

  const handleChange = (change) => {
    setTodo(change.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLocalStorage()
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <h1 className='font-bold text-center text-xl'>iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>Add Todos</h2>
          < input
            onChange={handleChange}
            value={todo}
            type="text"
            className='w-full p-1 border border-gray-600 rounded' />
          <button onClick={handleAdd}
            disabled={todo.length <= 3}
            className='bg-violet-500 hover:bg-violet-700 p-2 py-1 text-white rounded-md text-sm font-bold w-full'>Save</button>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">

          {todos.length === 0 && <div className='m-5'>No Todos to Display!</div>}
          {todos.map((item) => {

            return (showFinished || item.isCompleted) && <div key={item.id} className="todo flex w-1/2 my-3 justify-between">
              <div className='flex gap-5'>
                <input
                  onChange={handleCheckbox}
                  name={item.id}
                  type="checkbox"
                  checked={item.isCompleted} />
                <div
                  className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }}
                  className='bg-violet-500 hover:bg-violet-700 p-3 py-1 text-white rounded-md mx-2 text-sm font-bold'><MdEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }}
                  className='bg-violet-500 hover:bg-violet-700 p-3 py-1 text-white rounded-md mx-2 text-sm font-bold'><MdDelete /></button>
              </div>
            </div>

          })}
        </div>
      </div>
    </>
  )
}

export default App