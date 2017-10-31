import testReducer from './TestReducer';
//import {reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	test: testReducer,
//	form: formReducer,
});

export default rootReducer;
