import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getActivePage } from '@selectors/App';
import { Box, Text } from '@styled';
import theme from './styled/theme';
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

const App = connect(mapStateToProps)(Default);

export default App;
