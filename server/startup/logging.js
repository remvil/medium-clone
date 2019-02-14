require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const config = require('config');
const dbConf = config.get('dbConf');
const dbUri = `mongodb://${dbConf.host}:${dbConf.port}/${dbConf.dbName}`

module.exports = function() {
    // ERROR HANDLINGS
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'logs/uncaughtExceptions.log' }));

    process.on('unhandledRejection', (ex) => { throw ex; });

    winston.add(winston.transports.File, { filename: 'logs/logfile.log' });
    winston.add(winston.transports.MongoDB, {
        level: 'error',
        db: "mongodb://192.168.99.100:32770/medium-clone"
    });

    // TEST GENERIC ERROR
    // throw new Error('Something failed during startup.');
}