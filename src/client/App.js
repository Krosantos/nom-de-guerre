import React from 'react';
import { connect } from 'react-redux';
import { getActivePage } from '@selectors/App';
import './index.css';

const Default = () => (
	<div>
		Fallback Page!
	</div>
);

const mapStateToProps = (state) => ({
	activePage: getActivePage(state),
});

const App = connect(mapStateToProps)(Default);

export default App;
