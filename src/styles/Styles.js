export const styles = {
	card : {
		card_wrapper : {
			width:'100%',
			borderRadius:'5px',
			backgroundColor:'#fff',
		},
		card_image : {
			width: '100%'
		},
		card_title : {
			position: 'absolute',
			top: '5px',
			right: '5px',
			color: 'black',
			backgroundColor:'rgba(255,255,255,.6)',
			padding:'5px',
			borderRadius:'5px',
			fontSize:'10px',
			textTransform:'uppercase'
		},
		card_description :{
			padding:'5px',
			minHeight:'120px',
		},
		card : {
			width:'31%',
			display: 'inline-block',
			margin:'1%',
			verticalAlign: 'top',
		},
		loading: {
			width:'31%',
			display: 'inline-block',
			margin:'1%',
			verticalAlign:'top',
			textAlign: 'center',
		},
		loading_image : {
			width:'50%',
		}
	},
	list : {
		list : {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
		list_container : {
			width: '100%',
			maxWidth:'1080px',
			margin:'auto',
		}
	},
	refresh_container: {
		position:'relative',
	},
	refresh : {
		display:'inline-block',
		position:'relative',
	},
	nav: {
		nav_ul:{
			listStyle:'none',
			margin: 0,
			padding: 0,
		},
		nav_li:{
			display:'inline-block',
			padding:'10px',
		}
	}
}
