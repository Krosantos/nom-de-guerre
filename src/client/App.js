import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';
import Page from './pages';
import './index.css';
const App = () => (
	<ThemeProvider theme={theme}>
		<Page />
	</ThemeProvider>
);
export default App;
