// var expr = require("express")
// var app = expr()

// app.get("/",(req,res)=>{
//     res.set("content-type","text/html")
//     res.write("<h1><i>Hello Guys</i></h1>")
//     res.send()
//     // res.write("end") throw err
// })
// app.get("/about",(req,res)=>{
//     res.set("content-type","text/html")
//     res.write("<h3><b>Kya dekhne aaya hai</b></h3>")
//     res.send()
//     // res.write("end") throw err
// })
// app.get("/Gallery",(req,res)=>{
//     res.set("content-type","image/jpeg")
//     res.write('<img src="sky.jpg" alt="Good Morning" width="800" height="600">')
//     res.send()
//     // res.write("end") throw err
// })
// app.listen(5455,()=>{console.log("Server Started");})


// ***********Route parameters******************

// var express = require('express');
// var app = express();
// app.get('/:id', function(req, res){
// res.send('The id you specified is ' + req.params.id);
// });
// app.listen(3000);

// complex example
// var express = require('express');
// var app = express();
// app.get('/things/:name/:id', function(req, res){
// // res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
// res.send(req.params)
// });
// app.listen(3000);