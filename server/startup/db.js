const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');
const dbConf = config.get('dbConf');
const dbUri = `mongodb://${dbConf.host}:${dbConf.port}/${dbConf.dbName}`
console.log(dbUri)
module.exports = function() {
    // Fix "collection.ensureIndex is deprecated. Use createIndexes instead." Deprecation Waring
    mongoose.set('useCreateIndex', true);
    mongoose.connect(dbUri, { useNewUrlParser: true })
        .then(() => winston.info(`Connected to MongoDB at ${dbUri} ...`))
}