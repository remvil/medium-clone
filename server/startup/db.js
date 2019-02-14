const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');
const dbConfig = config.get('dbConfig');
const dbUri = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`
console.log(dbUri)
module.exports = function() {
    // Fix "collection.ensureIndex is deprecated. Use createIndexes instead." Deprecation Waring
    mongoose.set('useCreateIndex', true);
    mongoose.connect(dbUri, { useNewUrlParser: true })
        .then(() => winston.info(`Connected to MongoDB at ${dbUri} ...`))
}