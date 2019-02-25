import React from 'react';
import { Box } from '@core';
import { map } from 'lodash';
import UnitCard from './UnitCard';

const UnitGrid = ({ unitIds }) => (
	<Box
		alignItems="center"
		display="flex"
		flexWrap="wrap"
		justifyContent="center"
		mx="auto"
		overflowY="scroll"
		width="100%"
	>
		{
			map(unitIds, (unitId) => (<UnitCard key={unitId} unitId={unitId} />))
		}
	</Box>
);

export default UnitGrid;
