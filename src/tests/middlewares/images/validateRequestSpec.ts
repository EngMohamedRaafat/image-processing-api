import supertest from 'supertest';

import app from '../../../index';

const request = supertest(app);
describe('GET /api/images Request Validations', () => {
	it('should throw error for missing filename', async () => {
		const response = await request.get('/api/images?width=200&height=200');
		expect(response.status).toBe(400);
	});
	it('should throw error for missing height', async () => {
		const response = await request.get('/api/images?filename=fjord&width=200');
		expect(response.status).toBe(400);
	});
	it('should throw error for missing width', async () => {
		const response = await request.get('/api/images?filename=fjord&height=200');
		expect(response.status).toBe(400);
	});
	it('should throw error for invalid filename', async () => {
		const response = await request.get(
			'/api/images?filename=INVALID_FILE&width=200&height=200'
		);
		expect(response.status).toBe(400);
	});
});
