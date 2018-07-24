import React, { Component } from 'react';
import './App.scss';
import Landing from './ui/landing';
import Core from './core/coreComponent'

class App extends Component {
  render() {
    return(
      <div className="main">
        <Landing/>

      </div>
    )
  }
}

export default App;
