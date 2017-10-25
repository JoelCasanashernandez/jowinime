import React, { Component } from 'react';
import {AppRout} from './exports';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AppRout />
      </div>
    );
  }
}

export default App;
