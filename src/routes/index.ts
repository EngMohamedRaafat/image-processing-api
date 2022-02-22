import express from 'express';

import imagesRoutes from './api/images';

const routes = express.Router();

routes.use('/api/images', imagesRoutes);

export default routes;
