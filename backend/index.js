const express = require('express')
const cors = require('cors')
const app = express()

function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min); 
  }

app.use(cors())
app.get('/randomNumber', (req, res) => {
    console.log('Message Sent!')
    let x=getRandomInt(1, 7)
    res.send([x])
})

const port = 5000
const host = 'localhost'
app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})