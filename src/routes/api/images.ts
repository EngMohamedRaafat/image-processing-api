import express from 'express';

import { validateRequest } from '../../middlewares';

const routes = express.Router();

routes.get('/', validateRequest, (req, res) => {
	res.send('Working!');
});

export default routes;
