import React, { Component } from 'react';
import logo from './logo.svg';
import Recipes from './Recipes.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipes />
      </div>
    );
  }
}

export default App;
