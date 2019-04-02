import React from 'react';
import { compose, defaultProps, withProps } from 'recompose';

const VIEW_BOX = '0 0 54.744808 55.56216';

const asSvg = defaultProps({
	as: 'svg',
	position: 'absolute',
	sideFill: '#907359',
	stroke: '#000000',
	topFill: '#5ac32d',
});

const getPathStyle = (fill, stroke) => ({
	fill,
	fillOpacity: 1,
	stroke,
	strokeDasharray: 'none',
	strokeLinecap: 'butt',
	strokeLinejoin: 'miter',
	strokeMiterlimit: 4,
	strokeOpacity: 1,
	strokeWidth: 0.5291667,
});
/* eslint-disable max-lines-per-function */
const asHex = withProps(
	({ topFill, sideFill, stroke }) => {
		const topStyle = getPathStyle(topFill, stroke);
		const sideStyle = getPathStyle(sideFill, stroke);

		return {
			children:
	<g
		id="layer1"
		transform="translate(4.5590133e-6,-241.43784)"
	>
		<g
			id="g4931-0-3"
			transform="translate(-111.31586,173.2847)"
		>
			<path
				d="m 111.62137,91.858366 v 8.151734 l 13.53345,23.44062 h 27.06689 l 13.53344,-23.44061 v -8.151733"
				id="edges"
				style={sideStyle}
			/>
			<path
				d="m 152.22171,115.299 v 8.15172 M 125.15482,115.299 v 8.15172 M 152.22171,115.299 H 125.15482 L 111.62137,91.858367 125.15482,68.417726 h 27.06689 l 13.53344,23.440651 z"
				id="topFill"
				style={topStyle}
			/>
		</g>
	</g>,
			viewBox: VIEW_BOX,
		};
	},
);

const enhance = compose(asSvg, asHex);

const Hex = enhance(() => (<div />));

export default Hex;
