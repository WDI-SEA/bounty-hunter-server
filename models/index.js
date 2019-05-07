let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', { useNewUrlParser: true });

module.exports.Bounty = require('./bounty')
