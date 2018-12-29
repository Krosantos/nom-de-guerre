import { get, map } from 'lodash';

const viewBoxRegex = /viewBox="([^"]+)/;
const pathRegex = /<path([^/>]+)/;
const idRegex = /\bid="([^"]+)/;
const dRegex = /\bd="([^"]+)/;

const getViewBox = (input) => {
	const matches = input.match(viewBoxRegex);
	console.log(matches);
	return get(matches, '0', '');
};

const getPaths = (input) => {
	const matches = input.match(pathRegex);
	return map(matches, mapPathToIdAndD);
};

const mapPathToIdAndD = (path) => {
	const idMatch = path.match(idRegex);
	const dMatch = path.match(dRegex);
	const id = get(idMatch, '0', '');
	const d = get(dMatch, '0', '');
	return { id, d };
};

const mapSvg = (input) => {
	console.log(input);
	const viewBox = getViewBox(input);
	const paths = getPaths(input);
	console.log(viewBox);
	return { paths, viewBox };
};

export default mapSvg;
