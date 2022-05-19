const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`99 bottles of beer on the wall <a href='/98'>Take one down pass it around </a>`)
});

app.get('/0', (req, res) => {
    res.send(`0 < a href= 'http://localhost/3001' > Start Over </a>`)
});

app.get('/:num_of_bottles', (req, res) => {
    res.send(`${req.params.num_of_bottles} Bottles of beer on the wall <a href= '${req.params.num_of_bottles-1}'> Take one down pass it around</a>`)
});

app.listen(3001, () => {
    console.log("Express de escuchar por request con browswer")
});