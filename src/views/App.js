import React, { Component } from 'react';
import {KEY} from '../config/Config';
import {BASE_URL} from '../config/Config';
import './App.css';
import TestCom from '../components/TestComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
<p>	{KEY}</p>
<p>{BASE_URL}</p>
        </p>
	<TestCom/>
      </div>
    );
  }
}

export default App;
