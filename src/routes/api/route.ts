import express from 'express';

const routes = express.Router();

routes.get('/route', (req, res) => {
	res.send(`${req.baseUrl} Working!`);
});

export default routes;
