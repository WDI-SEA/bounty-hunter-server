let mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/hunters', 
	{ 
		useNewUrlParser: true, 
		user: process.env.ATLAS_USERNAME, 
		pass: process.env.ATLAS_PASSWORD 
	}
)

module.exports.Bounty = require('./bounty')
