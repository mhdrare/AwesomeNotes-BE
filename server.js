const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./route/routes')
const port = process.env.PORT
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const allowedOrigins = ['http://localhost'];
app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);

			if (allowedOrigins.indexOf(origin) === -1) {
				const message = 'The CORS policy for this site does not allow access from the specified Origin.';
				return callback(new Error(message), false);
			}

			return callback(null, true);
		}
	})
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'))

routes(app);

app.listen(port);

console.log('AwesomeNotes already to use! API started on ' + port);