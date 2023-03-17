import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';



function App() {
 
  let [counter,setCounter] = useState(0);

  function count() {
    setCounter(counter+1);
  }
  
  function reset() {
    setCounter(0)
  }

  return (
    <React.Fragment>
        <h1>Super Counter! <span className='logo'></span></h1>
        <div className='counterContainer'>{counter}</div>
        <button onClick={count}>Click</button>
        <button onClick={reset}>Reload</button>
    </React.Fragment>

  );
}

export default App;
