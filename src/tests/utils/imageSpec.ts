import { promises as fs } from 'fs';
import imageSize from 'image-size';
import path from 'path';

import image, { ImagePathsType } from '../../utils/image';

describe('Test Image Utilities', () => {
	let imageDirs: ImagePathsType;
	it('should create name "test_50x50" for file "test"', async () => {
		const thumbName = image.generateThumbnailImageName('test', 50, 50, 'jpg');
		expect(thumbName).toEqual('test_50x50.jpg');
	});
	it('should return paths of "full" & "thumb" directories', async () => {
		imageDirs = image.getPaths();
		expect(imageDirs.full).toContain('/assets/images/full');
		expect(imageDirs.thumbnail).toContain('/assets/images/thumb');
	});
	it('should resize an image to 200x300', async () => {
		const fullImage = path.resolve(`${imageDirs.full}/fjord.jpg`);
		const outputImage = 'test.jpg';
		// create a resized image from the sample image
		await image.resize(fullImage, 200, 300, outputImage);
		// get width and height of the created image
		const testImage = imageSize(outputImage);
		expect(testImage.width).toBe(200);
		expect(testImage.height).toBe(300);
		// remove the created image
		fs.unlink(outputImage);
	});
});
