import testReducer from './TestReducer';
import fetchReducer from './FetchReducer';
import {reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	fetch: fetchReducer,
	test: testReducer,
	form: formReducer,
});

export default rootReducer;
