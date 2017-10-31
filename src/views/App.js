import React, { Component } from 'react';
import {connect} from 'react-redux'
import {KEY} from '../config/Config';
import {BASE_URL} from '../config/Config';
import './App.css';
import {itemsFetchData} from '../actions';
import Residential from '../components/Residential';

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
        </p>
	<Residential />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(itemsFetchData(id))
    }
  }
}
const mapStatetoProps = state => {
        return {
        my_store : state
        }
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);
