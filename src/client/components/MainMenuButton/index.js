import { connect } from 'react-redux';
import setActivePage from '@pairs/setActivePage';
import MainMenuButton from './MainMenuButton';

const mapDispatchToProps = (dispatch, { pageType }) => ({
	handleClick: () => {
		dispatch(setActivePage.creator(pageType));
	},
});

export default connect(null, mapDispatchToProps)(MainMenuButton);
