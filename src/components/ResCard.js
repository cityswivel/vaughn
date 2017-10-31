import React, { Component } from 'react';
import {KEY} from '../config/Config';
import {BASE_URL} from '../config/Config';

const styles = {
	card_wrapper : {
		width:'100%',
		borderRadius:'5px'
	},
	card_image : {
		width: '100%'
	},
	card_title : {
		position: 'absolute',
		bottom: '5px',
		left: '5px',
		color: 'white'
	}
}

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

render () {
	if (this.state.loading) {
		return (<p>loading</p>);
	}
	return (
		<div style={styles.card_wrapper}>
			<div style={{borderRadius:'5px',width:'100%',paddingTop:'80%',background:'url('+this.state.data[0].link+')',backgroundSize:'cover',backgroundPosition:'center',position:'relative'}}>
				<div style={styles.card_title}>{this.props.city} - {this.props.price}</div>
			</div>
		</div>
	)

}
}

export default ResCard;
