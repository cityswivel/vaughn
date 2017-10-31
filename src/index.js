import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger()
const store = createStore(
	rootReducer,
	applyMiddleware(loggerMiddleware,thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

 document.getElementById('root'));
registerServiceWorker();
