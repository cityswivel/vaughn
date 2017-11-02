import fetchReducer from './FetchReducer';
import filterReducer from './FilterReducer';
import imagesReducer from './imagesReducer';
import {reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	fetch: fetchReducer,
	form: formReducer,
	filter: filterReducer,
	images: imagesReducer,
});

export default rootReducer;
