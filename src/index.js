import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer, initialState } from './client/modules';
import App from './client/App';
import './static/index.html'; // eslint-disable-line import/no-unassigned-import

const composedMiddleware = () => {
	if (window && window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line  no-underscore-dangle
		return (compose(
			applyMiddleware(thunk),
			// eslint-disable-next-line  no-underscore-dangle
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
	document.getElementById('root'),
);
