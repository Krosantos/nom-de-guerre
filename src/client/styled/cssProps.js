import { responsiveStyle } from 'styled-system';
import { camelCase } from 'lodash';

const props = {
	'align-content': null,
	'align-items': null,
	'align-self': null,
	'background-color': 'colors',
	'background-image': null,
	'background-size': null,
	'border-bottom': null,
	'border-bottom-width': null,
	'border-left': null,
	'border-left-width': null,
	'border-right': null,
	'border-right-width': null,
	'border-top': null,
	'border-top-width': null,
	'border-style': null,
	'border-color': 'colors',
	cursor: null,
	display: null,
	fill: 'colors',
	flex: null,
	float: null,
	'flex-basis': null,
	'flex-direction': null,
	'flex-grow': null,
	'flex-shrink': null,
	'flex-wrap': null,
	'font-family': 'fonts',
	'font-weight': null,
	height: null,
	'justify-content': null,
	'letter-spacing': null,
	'line-height': null,
	'max-height': null,
	'max-width': null,
	'min-width': null,
	'min-height': null,
	opacity: null,
	order: null,
	'outline-color': 'colors',
	outline: null,
	overflow: null,
	'overflow-x': null,
	'overflow-y': null,
	position: null,
	stroke: 'colors',
	tabindex: null,
	'text-align': null,
	'text-decoration': null,
	'text-transform': null,
	'text-overflow': null,
	'vertical-align': null,
	'white-space': null,
	'z-index': null,
};

export default Object.keys(props).reduce((prev, curr) => {
	const propName = camelCase(curr);
	prev[propName] = responsiveStyle({ prop: propName, cssProperty: curr, key: props[curr] }); // eslint-disable-line no-param-reassign
	return prev;
}, {});
