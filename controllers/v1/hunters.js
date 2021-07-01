// Required modules
let express = require('express')

// Router instance
let router = express.Router()

// Include models
let db = require('../../models')

// GET /hunters
router.get('/', (req, res) => {
  db.Hunter.find().populate()
  .then(foundHunters => {
    res.send(foundHunters)
  })
  .catch(err => {
    console.log('Error in GET /v1/hunters')
    console.log(err)
    res.status(500).send('Something went wrong. Please contact an administrator.')
  })
})

router.post('/', (req, res) => {
	db.Hunter.create(req.body)
	.then(createdHunter => {
	  res.send(createdHunter)
	})
	.catch(err => {
	  console.log('Error in POST /v1/hunters')
	  console.log(err)
	  res.status(500).send('Something went wrong. Please contact an administrator.')
	})
})

module.exports = router