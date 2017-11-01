import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './route/route';

console.log(routes);

// Setting the express application
const app = express();
const router = express.Router();

// log requests to the console .
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup a default catch-all route that sends back a welcome message in JSON format.

app.use('/', routes);

module.exports = app;
