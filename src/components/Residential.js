import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../actions';
import {itemsFetchData} from '../actions';
import {KEY} from '../config/Config';
import {BASE_URL} from '../config/Config';
import ResCard from './ResCard';
import MyForm from './FilterForm';
const style = {
	list : {
		margin: 0,
		padding: 0,
		listStyle: 'none',
	},
	card : {
		width:'31%',
		display: 'inline-block',
		margin:'1%',

	}
}
function ResList(listings, sometext) {
	console.log(sometext);
	listings = Object.values(listings);

	var min_price=0;
	var max_price=100000;
	const fill = listings.filter(function(el){

		return el.price >= min_price &&
					el.price <= max_price;

	});
	const listing = fill.map(function(listing,index) {
		return (
			<li index={index} style={style.card}>
		<ResCard
			index={index}
			mls={listing.mls}
			city={listing.city}
			price={listing.price}
		 />
		</li>
		)
	});
	return (
		<ul style={style.list}>
			{listing}
		</ul>
	);
}

class Residential extends Component {
componentDidMount() {
	this.props.onTodoClick(BASE_URL + 'listings_all?key='+KEY);
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

		return(
		<div>
		<MyForm />
		<p>loaded</p>

		{ResList(this.props.my_store.fetch.payload,this.props.filter)}
		</div>
		)
	}
	}

}
const filter_listings = (listings) => {
//	var filtered = listings.payload.filter(function(el){
//		return(el.office==="Coldwell Banker Lota Realty")
//	});
if(listings.payload){console.log(listings);}
	return listings;
}

const mapStatetoProps = state => {
	return {
	my_store : state,
	filter : state.form
	}
}

const mapDispatchtoProps = dispatch => {
	return {
		testStore : () => dispatch(action.cass()),
		    onTodoClick: (id) => {
      			dispatch(itemsFetchData(id))
		    }
	}
}

export default connect (mapStatetoProps,mapDispatchtoProps)(Residential);