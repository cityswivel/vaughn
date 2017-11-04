import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../actions';
import {itemsFetchData} from '../actions';
import {imagesFetchData} from '../actions';
import {KEY} from '../config/Config';
import {BASE_URL} from '../config/Config';
import ResCard from './ResCard';
import FilterForm from './FilterForm';
import LazyLoad from 'react-lazyload';
import {styles} from '../styles/Styles';
var _ = require('lodash');

class ListingView extends Component {
componentDidMount() {
	console.log(this.props);
}

	render() {

		return(
			<div>
			<p>listingview{this.props.match.params.number}</p>

			</div>
		)
	}


}

export default ListingView;
//export default connect (mapStatetoProps,mapDispatchtoProps)(Residential);
