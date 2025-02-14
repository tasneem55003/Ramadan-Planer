import {useRef , useState } from 'react';
import '../App.css';


function Quran() {
    const [value ,setValue]=useState(["","",""]);
    const names=["الحفظ","المراجعه","التدبر"];
   const [index ,setIndex]=useState(0);
   const inputRef =useRef(null);
   const handleAdd= ()=>{
    if (!inputRef.current) return;
    const inputValue = inputRef.current.value.trim();
    if (inputValue==="") return;
    const updateV= [...value]
    updateV[index]= inputValue;
    setValue(updateV);
    setIndex((prevIndex)=>(prevIndex +1) % names.length)
    inputRef.current.value=""
   }
   return(
        <div className='Quran'>
            <h2>Qu'ran</h2>
            <div className='Qmain'>
                <ul>
                    {
                     names.map((name ,i)=>
                        {
                            return <li key={i}>
                                {name}: {value[i]}
                            </li>
                        }) 
                     }
                    
                </ul>
                <input ref={inputRef} placeholder='text here' type='text' />
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}


export default Quran;
