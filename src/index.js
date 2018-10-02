import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer, initialState } from './client/modules';
import App from './client/App.js';
import './static/index.html';

const composedMiddleware = () => {
	if (window && window.__REDUX_DEVTOOLS_EXTENSION__) { /* eslint-disable-line  no-underscore-dangle */
		return (compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /* eslint-disable-line  no-underscore-dangle */
		));
	}
	return applyMiddleware(thunk);
};

const store = createStore(
	rootReducer,
	initialState,
	composedMiddleware(),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
