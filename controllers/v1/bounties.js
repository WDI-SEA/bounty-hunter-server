// Required modules
let express = require('express')

// Router instance
let router = express.Router()

// Routes
router.get('/', (req, res) => {
  res.send('stub')
})
