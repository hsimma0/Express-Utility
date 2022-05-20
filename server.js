// //EXPRESS ROUTE
// const express = require('express');
// const app = express();
// const port = 3010;


// // //GREETINGS
// // app.get("/", (req, res) => {
// //     console.log("Got A Request");
// //     res.send('Hello its yo Herv')
// // })
// // app.get("/greeting/:name", (req, res)=> {
// //     console.log(req.params)
// //     res.send("Hello, whats up" + "  " + req.params.name)
// // });

// //TIP CALCULATOR
// // app.get("/tip/:total/:tipPercentage", (req,res) =>{
// //     let tip = (req.params.tipPercentage / 100) * req.params.total;
// //     res.send(`${tip}`);
// // });

// //MAGIC 8 BALL
//     const randomAns =  [
//         "It is certain",
//         "It is decidedly so",
//         "Without a doubt",
//         "Yes definitely",
//         "You may rely on it",
//         "As I see it yes",
//         "Most likely",
//         "Outlook good",
//         "Yes",
//         "Signs point to yes",
//         "Reply hazy try again",
//         "Ask again later",
//         "Better not tell you now",
//         "Cannot predict now",
//         "Concentrate and ask again",
//         "Don't count on it",
//         "My reply is no",
//         "My sources say no",
//         "Outlook not so good",
//         "Very doubtful",
//       ];

//       app.get("/magic/:anything", (req,res) => {
//           res.send(`
//           <h1>${req.params.anthing}</h1>
//           ${randomAns[Math.floor(Math.random() * randomAns.length)]}
//           `)
//     });

// // IF APP IS LISTENING 
// app.listen(port, () => {
//     console.log("Express de escuchar por request con browswer")
// });