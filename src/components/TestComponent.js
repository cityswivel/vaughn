import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../actions';

class TestCom extends Component {
componentDidMount() {
}

	render() {
		return(
		<div>
		<p>this.props</p>
		<p onClick={() => this.props.testStore()}>click</p>
		</div>
		)
	}

}

const mapStatetoProps = state => {
	return {
	my_store : state
	}
}

const mapDispatchtoProps = dispatch => {
	return {
		testStore : () => dispatch(action.cass()),
	}
}

export default connect (mapStatetoProps,mapDispatchtoProps)(TestCom);
