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
import {styles} from '../styles/Styles';

function getVisibleListings(listings, filter) {
	switch(filter.filter_status) {
		case 'SHOW_ALL':
					return listings
		case 'SHOW_FILTER' :
			return listings.filter(function(el){
				return el.price >= 300000
				&& el.price <= 400000
			});

			default:
				return listings
	}
}

class Commercial extends Component {
componentDidMount() {
	this.props.onTodoClick(BASE_URL + 'listings_commercial?key='+KEY);
	//this.props.getImages(BASE_URL + 'all_images?key='+KEY);
}

	render() {
	if(!this.props.my_store.fetch.loaded){
		return(
		<div>
		loading....
		</div>
		)
	}

	if(this.props.my_store.fetch.loaded){
		var my_listings = this.props.visibleListings.map(function(data,i){
		 var my_key = Math.random();
			return (
				<ResCard
				key={my_key}
				mls={data.mls}
				city={data.city}
				price={data.price}
				description={data.description.substring(0,250)}
				/>

			)
		})
		return(
		<div style={styles.list.list_container}>
		<FilterForm />
		<p>loaded</p>
		<ul style={styles.list.list}>{my_listings}</ul>
		</div>
		)
	}
	}

}

const mapStatetoProps = state => {
	return {
	my_store : state,
	visibleListings : getVisibleListings(state.fetch.payload,state.filter)
	}
}

const mapDispatchtoProps = dispatch => {
	return {
		testStore : () => dispatch(action.cass()),
		    onTodoClick: (id) => {
      			dispatch(itemsFetchData(id))
		    },
				getImages : (url) => {
					dispatch(imagesFetchData(url))
				}
	}
}

export default connect (mapStatetoProps,mapDispatchtoProps)(Commercial);
