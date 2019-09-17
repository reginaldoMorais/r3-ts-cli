import express from 'express';
import bodyParser from 'body-parser';
import serverConsole from './console';
import cors from './middleware/cors';
import routes from './routes';

const app = express();

// Configs
const PORT = process.env.PORT || '8080';
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middlewears
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/assets', express.static('./dist'));

// Routes
routes(app);

// Start App
app.listen(PORT, () => {
  serverConsole(PORT, NODE_ENV);
});

module.exports = app;
