import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return <div><h1>Hello, {props.name} {props.nimi}</h1> <h1>Kaikki {props.nimet}</h1> </div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hei, tervetuloa kotiin!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Liisa harjoittelee Reactia
          </p>
      <Welcome name="Sara" />
      <Welcome name="Liisa" />
      <Welcome nimi="Näyttelijät" />
      <Welcome nimet="näyttelijät" />
      </div>
    );
  }
}

export default App;
