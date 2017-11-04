
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { filterOn } from '../actions';
import { filterOff } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class FilterForm extends Component {
componentDidMount () {

}
        render() {
					var myFilt = new Object();
					myFilt.max_price = 500000;
					myFilt.min_price = 400000;
	              return (
			<div>
					<TextField
						hintText="Hint Text"
						floatingLabelText="Floating Label Text"
					/>
					<br />
					<RaisedButton label="Filter On" onClick={() => this.props.turnOnFilter(myFilt)}/>
					<RaisedButton label="Filter Off" onClick={() => this.props.turnOffFilter()}/>
      </div>
                );
        }
}

const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchtoProps = dispatch => {
	return {
		turnOnFilter : (payload) => dispatch(filterOn(payload)),
		turnOffFilter : () => dispatch(filterOff()),
	}
}


export default connect(mapStateToProps,mapDispatchtoProps)(FilterForm);
