import * as fs from 'fs';

export default (inputFilePath: string) => {
	return fs.readFileSync(inputFilePath, 'utf8');
};
