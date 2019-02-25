import React from 'react';
import { Box } from '@core';

const UnitCard = ({
	name,
	color,
	cost,
}) => (
	<Box
		bg="wine"
		height="200px"
		m={2}
		width="150px"
	>
		{name}
		{color}
		{cost}
	</Box>
);

export default UnitCard;
