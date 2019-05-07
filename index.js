// Required modules
let cors = require('cors')
let express = require('express')

// Express instance
let app = express()

// Set up body-parser and cors
app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended:false}))

// Controllers
app.use('/v1/bounties', require('./controllers/v1/bounties'))

// Catch-all (wildcard) route
app.get('*', (req, res) => {
  res.status(404).send('Not Found')
})

// Attach to port
app.listen(process.env.PORT || 3000)
