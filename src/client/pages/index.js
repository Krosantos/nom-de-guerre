import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';
import getActivePage from '@selectors/App';
import { MAIN_MENU_PAGE, EDIT_ARMY_PAGE } from '@constants';
import MainMenu from './MainMenu';
import EditArmies from './EditArmies';

const mapStateToProps = (state) => ({
	activePage: getActivePage(state),
});
const shouldShowMainMenu = ({ activePage }) => activePage === MAIN_MENU_PAGE;
const shouldShowEditArmies = ({ activePage }) => activePage === EDIT_ARMY_PAGE;
const enhance = compose(
	connect(mapStateToProps),
	branch(shouldShowMainMenu, renderComponent(MainMenu)),
	branch(shouldShowEditArmies, renderComponent(EditArmies)),
);

export default enhance(MainMenu);
