import fetchReducer from './FetchReducer';
import filterReducer from './FilterReducer';
import imagesReducer from './imagesReducer';
//import {reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	fetch: fetchReducer,
//	form: formReducer,
	filter: filterReducer,
	images: imagesReducer,
	router: routerReducer,
});

export default rootReducer;
