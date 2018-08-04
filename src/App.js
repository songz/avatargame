import React, { Component } from 'react';
import logo from './logo.svg';
import { Avatar } from './Avatar/Component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar speed={10} position={6} avatarId={123} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
