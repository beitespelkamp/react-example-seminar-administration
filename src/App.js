import React, { Component } from 'react';
import './App.css';
import beit from './graphics/beit.png'
import Navigation from './components/Navigation.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img id="logo" src={beit} />
        <h1>BEIT Academy</h1>
        </header>
        <Navigation></Navigation>
      </div>
    );
  }
}
export default App;