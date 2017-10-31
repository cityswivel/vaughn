
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class MyForm extends Component {
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
            <button type="submit" className="blue">Sign In</button>
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
    };
};

export default connect(mapStateToProps)(reduxFormSignin);
