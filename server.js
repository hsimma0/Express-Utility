//Express Route
const { request } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();


//Greetings
app.get("/greetings/", (req, res) => {
    console.log('Got A Request');
    res.send('Hello')
})

app.get('/greetings/:name', (req,res) => {
    req.send('Hello ${req.params.name}')
});


//Tip Calculator
app.get("/tip/:total/:tipPercentage", (req,res) => {
    let tip = (req.params.tipPercentage / 100) * request.params.name;
});


//Magic 8 Ball
app.get("/magic/:anything", (req, res) =>{
    const array =  [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
      ];

    const magic = array[Math.floor(Math.random() * answers.length)];
    res.send(`${request.params.anything} <h1> ${array[x]}</h1>`);
});


// IF APP IS LISTENING 
app.listen(3001, () => {
    console.log("Express de escuchar por request con browswer")
});