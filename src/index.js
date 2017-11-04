import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk';
import App from './views/App';
import Residential from './components/Residential';
import Commercial from './components/Commercial';
import Land from './components/Land';
import ListingView from './components/ListingView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const history = createHistory()
const routemiddleware = routerMiddleware(history)

const loggerMiddleware = createLogger()
const store = createStore(
	rootReducer,
	applyMiddleware(loggerMiddleware,routemiddleware,thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<MuiThemeProvider>
				<App />
				<Route exact path="/" component={Residential}/>
				<Route path="/commercial" component={Commercial}/>
				<Route path="/land" component={Land} />
				<Route path="/listing/:number" component={ListingView}/>
			</MuiThemeProvider>


		</ConnectedRouter>
	</Provider>,

 document.getElementById('root'));
registerServiceWorker();
