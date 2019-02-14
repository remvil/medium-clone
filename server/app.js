const express = require('express')
const routes = require('./routes/')
const winston = require('winston')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const config = require('config');

const srvLPort = config.get('server.lPort');
const app = express()
const router = express.Router()

/** Logging */
require('./startup/logging')();
/** Cloudinary configuration */
require('./startup/cloudinary');
/** MongoDB connection */
require('./startup/db');

/** Set up routes {API Endpoints} */
routes(router)

/** Set up middlewares */
app.use(cors()) // prevents cross-origin request errors.
app.use(bodyParser.json()) // used to parse formdata in POST request into req.body object
app.use(helmet()) // armours our API to prevent attacks.
app.use('/api', router)

/** Start server */
app.listen(srvLPort, () => {
    winston.info(`Medium-clone run and listening on port ${srvLPort} ...`);
});