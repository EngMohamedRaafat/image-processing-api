import express from 'express';
import morgan from 'morgan';

import routes from './routes';

const app = express();
const PORT = 3000;

app.use(routes);
app.use(morgan('dev'));

// start the Express server
app.listen(PORT, () => {
	console.log(`server started at http://localhost:${PORT}`);
});

export default app;
