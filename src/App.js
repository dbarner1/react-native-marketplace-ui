import React, { Component } from 'react';
import './App.css';
import Main from './main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Main url='https://barner-marketplace-api.herokuapp.com/users'/>
      </div>
    );
  }
}

export default App;
