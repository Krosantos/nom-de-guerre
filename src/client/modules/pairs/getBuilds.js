import { cloneDeep, set } from 'lodash';
import Api from '@api';
import pairFactory from './pairFactory';
const action = 'GET_BUILDS';
const reducer = (state, { payload }) => {
	const newState = cloneDeep(state);
	set(newState, 'dashboard.builds', payload);
	return newState;
};
export const asyncCreator = () => (dispatch) => {
	const api = Api();
	return api('build/list')
		.then((builds) => {
			dispatch({ type: action, payload: builds });
		})
		.catch(() => {
			dispatch({ type: action, payload: {} });
		});
};
export default pairFactory(action, reducer);
