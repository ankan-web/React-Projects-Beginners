import React, { useState } from 'react'
import "../style.css"

const Todo = () => {

const [todos , setTodos] = useState([]);

const [input , setInput] = useState("");



const handleSubmit = (e)=>{
  e.preventDefault();
  setTodos([...todos , input]);
  setInput("");
}

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };


  return (
    <div className='container'>
      <input type="text"
      placeholder='new Todo'
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />
      


      <button onClick={handleSubmit}>Submit</button>


      <ul className='todos-list'>
        {todos.map((todo, index)=>(
          <li className='todo' key={index}><span>{todo}</span>

          <button className='close'onClick={()=>removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
