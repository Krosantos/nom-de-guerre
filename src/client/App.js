import React from 'react';
import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';
import { ThemeProvider } from 'styled-components';
import { getActivePage } from '@selectors/App';
import { Box, Text } from '@styled';
import constants from 'constants';
import theme from './styled/theme';
import MainMenu from './pages/MainMenu';
import './index.css';

const Default = () => (
	<ThemeProvider theme={theme}>
		<Box
			display="flex"
			height="100%"
			width="100%"
			bg="wine"
		>
			<Text diplay="block" m="auto" color="pale" fontSize="4rem" fontFamily="Cinzel">
				Fallback Page!
			</Text>
		</Box>
	</ThemeProvider>
);

const mapStateToProps = (state) => ({
	activePage: getActivePage(state),
});

const shouldShowMainMenu = ({ activePage }) => activePage === constants.MAIN_MENU_PAGE;

const enhance = compose(
	connect(mapStateToProps),
	branch(shouldShowMainMenu, renderComponent(MainMenu))
);
export default enhance(Default);
