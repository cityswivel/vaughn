
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { filterOn } from '../actions';
import { filterOff } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class MyForm extends Component {
componentDidMount () {
}
        render() {
                return (
      <div className="form">
        <div className="container">
          <h2>Filter</h2>
          <form>
            <Field name="min_price"
                  component="input"
                  type="text"
                  placeholder="Min Price"
            />
            <Field name="max_price"
                  component="input"
                  type="text"
                  placeholder="Max Price"
            />
						<TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
<RaisedButton label="Filter On" onClick={() => this.props.turnOnFilter(this.props.payload)}/>
<RaisedButton label="Filter Off" onClick={() => this.props.turnOffFilter()}/>
          </form>
        </div>
      </div>
                );
        }
}
const reduxFormSignin = reduxForm({
  form: 'simple'
})(MyForm);

const mapStateToProps = (state) => {
    return {
			payload: state.form.simple
    };
};
const mapDispatchtoProps = dispatch => {
	return {
		turnOnFilter : (payload) => dispatch(filterOn(payload)),
		turnOffFilter : () => dispatch(filterOff()),
	}
}


export default connect(mapStateToProps,mapDispatchtoProps)(reduxFormSignin);
