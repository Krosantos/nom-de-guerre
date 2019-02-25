import { assign } from 'lodash';
import setActivePage from '@pairs/setActivePage';

const actionMap = assign(
	{},
	setActivePage.reducer,
);

const initialState = {
	activePage: 'editArmy',
};
const rootReducer = (state, action) => {
	if (!actionMap[action.type])
		return { ...state };
	const result = actionMap[action.type](state, action);

	return result;
};

export {
	initialState,
	rootReducer,
};
