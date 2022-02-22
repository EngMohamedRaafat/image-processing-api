import express from 'express';
import { existsSync, promises as fs } from 'fs';
import path from 'path';

import { ValidationError } from '../../errors';
import { validateRequest } from '../../middlewares';
import image from '../../utils/image';

const routes = express.Router();

routes.get('/', validateRequest, async (req, res, next) => {
	const filename = req.query['filename'] as string;
	const width = Number(req.query['width'] as string);
	const height = Number(req.query['height'] as string);

	// get full and thumbnail path
	const imageDir = image.getPaths();
	// check on the thumb directory existence
	if (!existsSync(imageDir.thumbnail)) {
		await fs.mkdir(imageDir.thumbnail);
	}
	// append filename to the full path
	imageDir.full = path.join(imageDir.full, `${filename}.jpg`);

	// check if the original exists or not in full directory
	if (existsSync(imageDir.full)) {
		// generate path of the resized image
		imageDir.thumbnail = path.join(
			imageDir.thumbnail,
			image.generateThumbnailImageName(filename, width, height, 'jpg')
		);
		// check if the resized image is not exists in the thumb directory
		if (!existsSync(imageDir.thumbnail)) {
			// resize and save the resulted image
			await image.resize(imageDir.full, width, height, imageDir.thumbnail);
			// set status to 201 (created)
			res.status(201);
		}
		// send the resized image to be displayed
		res.sendFile(imageDir.thumbnail);
	} else {
		// throw exception if original image is not found
		next(new ValidationError(`'${imageDir.full}' does not exist`));
	}
});

export default routes;
