const express = require('express')
const app = express()
const cors = require('cors')
const Songs = require('./models')
const seed = require('./db/seed')
const PORT = 5001

// processing json and allowing cors
app.use(express.json())
app.use(cors())

// get request
app.get('/songs', async (req, res) => {
    await seed()
    res.status(200).send({ songs: await Songs.findAll() })
})

// post request
app.post('/songs', async (req, res) => {
    await Song.create(req.body)
    res.status(200).send({ songs: await Songs.findAll() })
})

app.listen(PORT, () => {
    seed()
    console.log(`Listening on port ${PORT}`)
})