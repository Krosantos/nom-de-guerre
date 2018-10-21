import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';
import { getActivePage } from '@selectors/App';
import constants from 'constants';
import MainMenu from './MainMenu';

const mapStateToProps = (state) => ({
	activePage: getActivePage(state),
});

const shouldShowMainMenu = ({ activePage }) => activePage === constants.MAIN_MENU_PAGE;

const enhance = compose(
	connect(mapStateToProps),
	branch(shouldShowMainMenu, renderComponent(MainMenu))
);

export default enhance(MainMenu);
