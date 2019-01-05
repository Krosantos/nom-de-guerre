const fs = require('fs');
const path = require('path');

const cleanFolders = () => {
	const stagingPath = path.resolve(__dirname, '../staging');
	const compilePath = path.resolve(__dirname, '../compiled');
	const distPath = path.resolve(__dirname, '../dist');
	const deleteFolderRecursive = (path) => {
		if (fs.existsSync(path)) {
			fs.readdirSync(path).forEach((file) => {
				const curPath = `${path}/${file}`;
				if (fs.lstatSync(curPath).isDirectory()) { // recurse
					deleteFolderRecursive(curPath);
				} else { // delete file
					fs.unlinkSync(curPath);
				}
			});
			fs.rmdirSync(path);
		}
	};
	// Wipe out the folders.
	deleteFolderRecursive(stagingPath);
	deleteFolderRecursive(compilePath);
	deleteFolderRecursive(distPath);
};

module.exports = cleanFolders;
