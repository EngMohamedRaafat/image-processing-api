import express from 'express';

import route from './api/route';

const routes = express.Router();

routes.use('/api', route);

export default routes;
