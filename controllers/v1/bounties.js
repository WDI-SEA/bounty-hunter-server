// Required modules
let express = require('express')

// Router instance
let router = express.Router()

// Include models
let db = require('../../models')

// GET /bounties
router.get('/', (req, res) => {
  db.Bounty.find()
  .then(foundBounties => {
    res.send(foundBounties)
  })
  .catch(err => {
    console.log('Error in GET /v1/bounties')
    console.log(err)
    res.status(500).send('Something went wrong. Please contact an administrator.')
  })
})

// POST /bounties
router.post('/', (req, res) => {
  db.Bounty.create(req.body)
  .then(createdBounty => {
    console.log('Success', createdBounty)
    res.redirect(`/v1/bounties`)
  })
  .catch(err => {
    console.log('Error in POST /v1/bounties')
    console.log(err)
    res.status(500).send('Something went wrong. Please contact an administrator.')
  })
})

// GET /bounties/:id
router.get('/:id', (req, res) => {
  res.send('stub')
})

// PUT /bounties/:id
router.put('/:id', (req, res) => {
  res.send('stub')
})

// DELETE /bounties/:id
router.delete('/:id', (req, res) => {
  res.send('stub')
})

module.exports = router
