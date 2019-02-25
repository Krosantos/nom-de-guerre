import React from 'react';
import { Box } from '@core';
import Army from './components/Army';
import UnitGrid from './components/UnitGrid';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

const EditArmies = () => (
	<Box display="flex" height="100%" width="100%">
		<Army />
		<Box
			display="flex"
			flexDirection="column"
			id="REST OF THE PAGE"
			justifyContent="space-between"
			width="100%"
		>
			<TopBar />
			<UnitGrid />
			<BottomBar />
		</Box>
	</Box>
);

export default EditArmies;
