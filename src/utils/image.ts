import path from 'path';
import sharp from 'sharp';

/**
 * Create formated thumbnail image name
 * @param filename - original image names
 * @param width - image width
 * @param height - image height
 * @param ext - image extension
 * @returns a string representing file name include image dimensions
 */
const generateThumbnailImageName = (
	filename: string,
	width: number,
	height: number,
	ext: string
): string => {
	return `${filename}_${width}x${height}.${ext}`;
};

export type ImagePathsType = {
	full: string;
	thumbnail: string;
};

/**
 * Get the complete path of full and thumb folders inside image folder
 * @returns object contains full and thumbnail path as string
 */
const getPaths = (): ImagePathsType => {
	const imagesFolder = path.join(__dirname, '..', '..', 'assets', 'images');
	return {
		full: path.join(imagesFolder, 'full'),
		thumbnail: path.join(imagesFolder, 'thumb')
	};
};

/**
 * Resize the input image and save it to the provided output path
 * @param inputImagePath - original image path
 * @param width - image width
 * @param height - image height
 * @param outputImagePath - resized image path
 */
const resize = async (
	inputImagePath: string,
	width: number,
	height: number,
	outputImagePath: string
): Promise<void> => {
	await sharp(inputImagePath).resize(width, height).toFile(outputImagePath);
};

export default {
	generateThumbnailImageName,
	getPaths,
	resize
};
