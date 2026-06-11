import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Defualt")
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Button is clicked ")
  }

  const handleMouseOver = () => {
    alert("Mouse Overd in Area")
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form);
    
  }

  return (
    <>
      <div className="btn">
        <button onClick={handleClick}>Click me </button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a example of mouseOver!
      </div> */}

      <input type="text" name="email" value={form.email? form.email: "blank"} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone? form.phone: "blank"} onChange={handleChange}/>
    </>
  )
}

export default App