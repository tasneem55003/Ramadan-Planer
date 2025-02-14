import React from 'react';
import './App.css';
import Task from "./component/Task";
import Quran from "./component/Qu'ran";
import History from "./component/History";
import Pray from "./component/Pray";

function App() {
  return (
    <>
    <div className="App">
      <h2 className='title'>Ramadan Planer</h2>
        <div className='main'>
          <Task />
          <Pray />
          <Quran />
          <History />
        </div>
    </div>
    </>
    
  )
}

export default App;
