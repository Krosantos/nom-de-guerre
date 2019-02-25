const forEach = require('lodash/forEach');
const fs = require('fs');

const colors = [
	'White',
	'Blue',
	'Black',
	'Red',
	'Green',
];

const costs = [
	50,
	50,
	50,
	150,
	150,
	200,
	200,
	500,
	1000,
];

const genUnits = () => {
	const result = {};

	let id = 1;

	forEach(colors, (color) => {
		forEach(costs, (cost, index) => {
			const name = `${color}_${cost}_${index + 1}`;

			result[id] = {
				color,
				cost,
				id,
				name,
			};
			id += 1;
		});
	});

	fs.writeFileSync('testUnits.json', JSON.stringify(result, null, 2));
};

genUnits();
