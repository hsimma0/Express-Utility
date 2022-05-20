//EXPRESS ROUTE
const express = require('express');
const app = express ();
const port = 3010;

app.get('/', (req,res) => {
    res.send(`98 bottles of beer on the wall <a href='/98'>Take one down and pass it around </a>`)
});

app.get('/-1', (req, res)=>{
    res.send(`-1 <a href= 'http://localhost/3010' > Start Over </a>`)
});

app.get('/:number_of_bottles', (req, res) => {
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall <a href= '${req.params.number_of_bottles -2}' Take one down pass it around </a>`)
});


// IF ASPP IS LISTENING
app.listen(port, () => {
    console.log("Express de escuchar por request con browser")
});