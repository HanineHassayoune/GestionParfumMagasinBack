const config = require('../config/config');
const mongoose = require('mongoose'); 
const db = {};
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
db.mongoose = mongoose;
db.url = config.DB_URL;
db.parfums = require('../api/models/parfum.model')(mongoose); 
db.magasins = require('../api/models/magasin.model')(mongoose);
module.exports = db;

