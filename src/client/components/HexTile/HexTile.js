import React from 'react';
import { map } from 'lodash';
import { Box, Svg, Path } from '@styled';

const paths = [
	{
		id: 'outer',
		path: 'm39 0.646c-0.275-0.00932-0.551-0.00734-0.83 0.00781-8.68 1.94-20.1-2.99-26.5 5.25-3.64 9.74-12.5 18.4-10.8 29.5 5.43 8.56 7.13 20.4 16.4 25.9 9.24 0.778 19.1 1.95 28-1.19 6.86-7.81 10.7-17.9 14.3-27.5-0.0546-9.64-7.55-16.9-10.6-25.6-2.15-3.39-5.77-6.21-9.89-6.35zm-20 8.42h21.9c3.74 7.46 7.49 14.9 11.2 22.4-3.74 7.46-7.5 14.9-11.2 22.4h-21.9l-11.2-22.4z',
	},
	{
		id: 'inner',
		path: 'm15.8 37.7c3.73 7.47 7.47 14.9 11.2 22.4h21.9c3.71-7.48 7.47-14.9 11.2-22.4-3.71-7.48-7.46-14.9-11.2-22.4h-21.9c-3.73 7.47-7.47 14.9-11.2 22.4z',
	},
];

const InnerPath = ({
	path,
	id,
}) => (
	<Path
		id={id}
		onClick={() => console.log('I AM', id)}
		fill="wood"
		stroke="smoke"
		d={path}
		hover={{
			fill: '#8200FF',
		}}
	/>
);

const HexTile = () => (
	<Box>
		<Svg
			viewBox="0 0 60.7 62.7"
			width="250px"
			height="250px"
		>
			{map(paths, ({ id, path }) => (<InnerPath key={id} id={id} path={path} />))}
		</Svg>
	</Box>
);

export default HexTile;
