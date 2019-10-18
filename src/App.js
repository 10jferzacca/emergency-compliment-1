import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'


export class App extends Component {
  render() {
    return (
      <div>
        <Hello name={'bob'}/>
      </div>
    )
  }
}

export default App;
