// Required modules
let express = require('express')

// Router instance
let router = express.Router()

// GET /bounties
router.get('/', (req, res) => {
  res.send('stub')
})

// POST /bounties
router.post('/', (req, res) => {
  res.send('stub')
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
