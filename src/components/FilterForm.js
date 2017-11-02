
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { filterOn } from '../actions';
import { filterOff } from '../actions';
class MyForm extends Component {
componentDidMount () {
	console.log(this.props);
}
        render() {
                return (
      <div className="form">
        <div className="container">
          <h2>Sign In</h2>
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
            <button type="button" className="blue" onClick={() => this.props.turnOnFilter(this.props.payload)}>Filter On</button>
						<button type="button" className="blue" onClick={() => this.props.turnOffFilter()}>Filter Off</button>

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
