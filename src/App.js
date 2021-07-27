import {Component} from 'react';
import React from 'react'
import './App.css';
import ClickCounter from './ClickCounter';
import Hovered from './Hovered';

class App extends Component {
  render(){
    console.log(React.version)
  return (
    <div className="App">
      <ClickCounter/>
      <Hovered/>
    </div>
  );
  }
}

export default App;
