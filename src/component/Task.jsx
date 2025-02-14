import { useRef, useState } from 'react';
import '../App.css';

function Task() {
  const [x, setx]=useState([])

  const inputRef=useRef()
  
  const add=() =>{
    const value= inputRef.current.value
    const newData= {completed:false , value}
    setx([...x, newData])
    inputRef.current.value=""
  }
  const itemDone= (index) =>{
    const newx = [...x]
    x[index].completed= !x[index].completed
    setx(newx)
  }
  // console.log(x)
  return (
    <div className="Task">
      <h2>Tasks</h2>
      <div>
        <ul>
          {
            x.map(({ value,completed }, index) => {
              return <li  className={completed ? "diffstyle" : ""}
               onClick={() => itemDone(index)} >{value}</li>
            })
          }
        </ul>
        <input ref={inputRef} placeholder='Enter new task...' />
        <button onClick={add}>Add</button>
      </div>
    </div>
  )
}

export default Task;