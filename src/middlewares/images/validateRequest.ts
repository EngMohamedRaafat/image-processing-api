import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../../errors';

const validateRequest = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const { filename, width, height } = req.query;

	let error: string | boolean;
	error = !filename ? 'filename is required' : false;
	error ||= !width
		? 'width is required'
		: !Number(width)
		? 'width must be a number'
		: false;
	error ||= !height
		? 'height is required'
		: !Number(height)
		? 'height must be a number'
		: false;

	if (error) {
		next(new ValidationError(error as string));
	}
	next();
};
export default validateRequest;
