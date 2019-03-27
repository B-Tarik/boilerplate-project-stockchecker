const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(process.env.DB, {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.Stock = require('./stock');
