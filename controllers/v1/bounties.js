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
    res.send(createdBounty)
  })
  .catch(err => {
    console.log('Error in POST /v1/bounties')
    console.log(err)
    res.status(500).send('Something went wrong. Please contact an administrator.')
  })
})

// GET /bounties/:id
router.get('/:id', (req, res) => {
  db.Bounty.findById(req.params.id)
  .then(foundBounty => {
    res.send(foundBounty)
  })
  .catch(err => {
    console.log('Error in GET /v1/bounties/:id')
    console.log(err)
    res.status(500).send('Something went wrong. Please contact an administrator.')
  })
})

// PUT /bounties/:id
router.put('/:id', (req, res) => {
  // args: {WHERE}, data, {OPTIONS}
  db.Bounty.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false }
  )
  .then(editedBounty => {
    res.send(editedBounty)
  })
  .catch(err => {
    console.log('Error in PUT /v1/bounties/:id')
    console.log(err)
    res.status(500).send('Something went wrong. Please contact an administrator.')
  })
})

// DELETE /bounties/:id
router.delete('/:id', (req, res) => {
  db.Bounty.findOneAndDelete({
    _id: req.params.id
  }, { useFindAndModify: false })
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log('Error in DELETE /v1/bounties/:id')
    console.log(err)
    res.status(500).send('Something went wrong. Please contact an administrator.')
  })
})

module.exports = router








