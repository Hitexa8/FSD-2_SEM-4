// Write express js script to perform the tasks as asked below.
// 1)Create one HTML file named ljform.html and add one form which contains username,
// password and submit button. Data should be submitted by HTTP post method.
// 2)Submit button is of black color with white text. (External CSS)
// 3)On home page form should be displayed and while submitting the form, on next page named
// “/login” if username is admin then it will display “Welcome admin” else display “Please login
// with Admin name”.
var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require("path");
app.use(bp.urlencoded({ extended: false }));
var sp = path.join(__dirname, "../public")
app.use(express.static(sp,{index:'Ljform.html'}))
app.post('/admin', function (req, res) {
 if(req.body.first_name=='admin'){
   res.write(`<h1 style="color:green">Hey ${req.body.first_name},Welcome!</h1><br>`)
 }
 else{
   res.write(`<h1 style="color:red">Please login with Admin name</h1>`);
 }
res.send()
})
app.listen(7003)
