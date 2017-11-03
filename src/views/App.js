import React, { Component } from 'react';
import {connect} from 'react-redux'
import {KEY} from '../config/Config';
import {BASE_URL} from '../config/Config';
import './App.css';
import {itemsFetchData} from '../actions';
import { Link } from 'react-router-dom';
import {styles} from '../styles/Styles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul style={styles.nav.nav_ul}>
          <li style={styles.nav.nav_li}><Link to='/'>residential</Link></li>
					<li style={styles.nav.nav_li}><Link to='/commercial'>commercial</Link></li>
					<li style={styles.nav.nav_li}><Link to='/land'>land</Link></li>
        </ul>
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
