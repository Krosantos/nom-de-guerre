import React from 'react';
import { Box, Hex } from '@core';
import { times } from 'lodash';

const calcHexPosition = (x, y, size) => {
	const xPosition = x * size * 0.74;

	let yPosition = y * size * 0.84;

	if (x % 2 === 0)
		yPosition += size * 0.42;

	return { xPosition, yPosition };
};

const calcHexZIndex = (x, maxX, y) => {
	const inverseX = maxX - x;
	const isEven = (x % 2 !== 0);
	const divisor = Math.floor(inverseX / 2);

	let zIndex = y + inverseX;

	zIndex -= divisor;
	zIndex -= isEven ? 1 : 0;
	return zIndex < 0 ? 0 : zIndex;
};

const HexGrid = ({ x, y, size }) => (
	<Box>
		{times(x, (xIndex) => times(y, (yIndex) => {
			const { xPosition, yPosition } = calcHexPosition(xIndex, yIndex, size);
			const zIndex = calcHexZIndex(xIndex, x, yIndex, y);
			const dimension = `${size}px`;

			return (
				<Hex
					height={dimension}
					left={xPosition}
					top={yPosition}
					width={dimension}
					x={xIndex}
					y={yIndex}
					zIndex={zIndex}
				/>
			);
		}))}
	</Box>
);

export default HexGrid;
