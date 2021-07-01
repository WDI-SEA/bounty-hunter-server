let mongoose = require('mongoose')

let hunterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 100,
		
	},
	bounties: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'Bounty'
	}]
})

module.exports = mongoose.model('Hunter', hunterSchema)