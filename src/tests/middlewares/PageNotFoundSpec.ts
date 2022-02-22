import supertest from 'supertest';

import app from '../../index';

const request = supertest(app);

describe('Test PageNotFound Middleware', () => {
	it('should throw PageNotFound exception', async () => {
		const response = await request.get('/page-not-found');
		expect(response.status).toBe(404);
	});
});
