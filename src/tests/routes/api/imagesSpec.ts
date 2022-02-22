import { existsSync, promises as fs } from 'fs';
import path from 'path';
import supertest from 'supertest';

import app from '../../../index';
import image, { ImagePathsType } from '../../../utils/image';

const request = supertest(app);

/**
 * @description Removes a file from the filesystem if exists
 * @param filePath - file to be deleted
 */
const removeFile = (filePath: string): void => {
	// check if thumb file exists
	if (existsSync(filePath)) {
		// remove thumb file
		fs.unlink(filePath);
	}
};

describe('Test API Use cases', () => {
	let imageDir: ImagePathsType, thumbImage: string;

	beforeAll(() => {
		// get full and thumbnail path
		imageDir = image.getPaths();
		// create a sample image path
		thumbImage = path.resolve(`${imageDir.thumbnail}/fjord_300x200.jpg`);
		// remove thumbnail file if exists
		removeFile(thumbImage);
	});
	afterAll(() => {
		// remove thumbnail file if exists
		removeFile(thumbImage);
	});
	describe('Resize image on first hit', () => {
		it('should create resized image & send status 201', async () => {
			const response = await request.get(
				'/api/images?filename=fjord&width=300&height=200'
			);
			expect(response.status).toBe(201);
		});
	});
	describe('Reload cached image on second hit', () => {
		it('should not create a new image & send status 200', async () => {
			const response = await request.get(
				'/api/images?filename=fjord&width=300&height=200'
			);
			expect(response.status).toBe(200);
		});
	});
});
