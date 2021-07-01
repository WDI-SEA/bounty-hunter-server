// Require the modules needed
let mongoose = require('mongoose')

// Create a Schema instance for bounty
let bountySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100
  },
  wantedFor: {
    type: String,
    required: true
  },
  client: String,
  ship: String,
  reward: {
    type: Number,
    default: 10000
  },
  hunters: [{
	  type: mongoose.Schema.Types.ObjectId, ref: 'Hunter'
  }],
  captured: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Bounty', bountySchema)
