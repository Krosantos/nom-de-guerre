import React from 'react';
import { Box } from '@core';
import HexGrid from '@components/HexGrid';

const Army = () => (
	<Box bg="wine" flex="0 0 auto" height="100%" id="I AM THE COHORT AND AUXILIARY" width="375px">

		<HexGrid size={100} x={4} y={8} />
	</Box>
);

export default Army;
