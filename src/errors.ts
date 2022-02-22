import { STATUS_CODES } from 'http';

class HttpException extends Error {
	status: number;
	message: string;
	/**
	 * @param status - status code of the HTTP response
	 * @param message - error message of the HTTP response
	 */
	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.message = message;
	}
}

class ValidationError extends HttpException {
	/**
	 * @param message - will be mapped to the default message of 400 error if empty
	 */
	constructor(message = '') {
		const httpStatusCode = 400;
		message ||= (<unknown>STATUS_CODES[httpStatusCode]) as string;
		super(httpStatusCode, message);
	}
}
class PageNotFound extends HttpException {
	/**
	 * @param message - will be mapped to the default message of 400 error if empty
	 */
	constructor(message = '') {
		const httpStatusCode = 404;
		message ||= (<unknown>STATUS_CODES[httpStatusCode]) as string;
		super(httpStatusCode, message);
	}
}

export { HttpException, ValidationError, PageNotFound };
