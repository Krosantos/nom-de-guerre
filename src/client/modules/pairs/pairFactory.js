// We want to take a string for action type, and return both a reducer, keyed by type,
// and an action creator, for maxmium overconvenience.
const getActionCreator = (action) => (payload) => ({ payload, type: action });
const getReducer = (action, reducer) => {
	const result = {};

	result[action] = reducer;
	return result;
};

const factory = (action, reducerFunc) => {
	const creator = getActionCreator(action);
	const reducer = getReducer(action, reducerFunc);

	return { creator, reducer };
};

export default factory;
