import { connect } from 'react-redux';
import setActivePage from '@pairs/setActivePage';
import MainMenuButton from './MainMenuButton';

const mapDispatchToProps = (dispatch, props) => ({
	handleClick: () => {
		dispatch(setActivePage.creator(props.pageType));
	},
});

export default connect(null, mapDispatchToProps)(MainMenuButton);
