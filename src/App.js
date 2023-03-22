import './App.css';
import React from 'react';
//import { useState } from 'react';



/*function App() {
 
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
}*/

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state={counter:0}

    this.count=this.count.bind(this);
    this.reset=this.reset.bind(this);

  }

  count() {
    this.setState(state=>({counter:state.counter+1}));
  }

  reset() {
    this.setState({counter:0});
  }


  render() {
    return (
      <React.Fragment>
          <h1>Super Counter! <span className='logo'></span></h1>
          <div className='counterContainer'>{this.state.counter}</div>
          <button onClick={this.count}>Click</button>
          <button onClick={this.reset}>Reload</button>
      </React.Fragment>
  
    );

  }
 



}








export default App;
