import express from 'express';
import morgan from 'morgan';

import routes from './routes';
import { errorHandler, pageNotFound } from './middlewares';

const app = express();
const PORT = 3000;

// logging middleware
app.use(morgan('dev'));
// routes handler
app.use(routes);
// page not found middleware
app.use(pageNotFound);
// error handler middleware
app.use(errorHandler);

// start the Express server
app.listen(PORT, (): void => {
	// eslint-disable-next-line no-console
	console.log(`server started at http://localhost:${PORT}`);
});

export default app;
