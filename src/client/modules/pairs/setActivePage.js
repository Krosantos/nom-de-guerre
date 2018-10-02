import pairFactory from './pairFactory';

const action = 'SET_ACTIVE_PAGE';

const reducer = (state, { payload }) => ({ ...state, activePage: payload });

export default pairFactory(action, reducer);
