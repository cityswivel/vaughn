import React, { Component } from 'react';
import {KEY} from '../config/Config';
import {BASE_URL} from '../config/Config';
import { connect } from 'react-redux';
import {styles} from '../styles/Styles';
import spinner from '../assets/spinner-gif-17.gif';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class ResCard extends Component {
	state = {
    loading: true,
    error: false,
    data: [],
  };
	fetchCardImage () {

		var url = BASE_URL + 'images?key='+ KEY + '&mls=' +this.props.mls;
		fetch(url)
			.then(res => res.json())
			.then((data) => this.setState({ data, loading: false}))
			.catch((err) => this.setState({loading:false, error:true}))
	}
componentDidMount() {
	this.fetchCardImage();
}

componentWillReceiveProps(nextProps) {

}
render () {
	if (this.state.loading) {
		return (<li style={styles.card.loading}>
			<div style={styles.refresh_container}>
			<RefreshIndicator
			      size={40}
			      left={10}
			      top={0}
			      status="loading"
						style={styles.refresh}
				/>
			</div>
			</li>);
	}
	return (
		<li style={styles.card.card}>
		<div style={styles.card.card_wrapper}>
			<div style={{borderRadius:'5px',width:'100%',paddingTop:'80%',background:'url('+this.state.data[0].link+')',backgroundSize:'cover',backgroundPosition:'center',position:'relative'}}>
				<div style={styles.card.card_title}>{this.props.city} - ${this.props.price}</div>
			</div>
			<div style={styles.card.card_description}>{this.props.description}</div>
		</div>
		</li>
	)
}
}
const mapStatetoProps = state => {
	return {
	images : state.images.payload,

	}
}
export default connect (mapStatetoProps,null)(ResCard);
//export default ResCard;
