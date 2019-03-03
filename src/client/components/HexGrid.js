import React from 'react';
import { Box, Hex } from '@core';
import { times } from 'lodash';

const calcBoxSize = (x, y, size) => {
	const rawHeight = y * size * 0.9125;
	const rawWidth = x * size * 0.8;
	const height = `${rawHeight}px`;
	const width = `${rawWidth}px`;

	return { height, width };
};

const calcHexPosition = (x, y, size) => {
	const xPosition = x * size * 0.73;

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

const HexGrid = ({ x, y, size }) => {
	const { height, width } = calcBoxSize(x, y, size);

	return (
		<Box height={height} position="relative" width={width}>
			{times(x, (xIndex) => times(y, (yIndex) => {
				const { xPosition, yPosition } = calcHexPosition(xIndex, yIndex, size);
				const zIndex = calcHexZIndex(xIndex, x, yIndex, y);
				const dimension = `${size}px`;
				const key = `${xIndex}_${yIndex}`;

				return (
					<Hex
						key={key}
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
};

export default HexGrid;
