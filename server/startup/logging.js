require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const config = require('config');
const dbConfig = config.get('dbConfig');
const dbUri = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`

module.exports = function() {
    // ERROR HANDLINGS
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'logs/uncaughtExceptions.log' }));

    process.on('unhandledRejection', (ex) => { throw ex; });

    winston.add(winston.transports.File, { filename: 'logs/logfile.log' });
    winston.add(winston.transports.MongoDB, {
        level: 'error',
        db: dbUri
    });

    // TEST GENERIC ERROR
    // throw new Error('Something failed during startup.');

    // TEST HANDLE PROMISES REJECTED
    // const p = Promise.reject(new Error('Something failed miserably!'));
    // p.then(() => console.log('Done'));

}