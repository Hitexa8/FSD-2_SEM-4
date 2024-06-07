// 3) Write express js script to perform following tasks.  (Middleware)

// Create one html file which contains one text field for name, email field and checkbox for subscription. 
// Html file will be loaded on home page. Email and name fields are required fields. 
// On login page welcome user and email id data should be printed.

// a. If user checked the subscription then “Thank you for the subscription” message will be printed and “logout” 
// link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page. 

// b. If user has not opted fr the subscription then “You can subscribe to get daily updates” message will be printed 
// and “subscribe” link will be displayed under the message. If user clicks subscribe link then he/she will be 
// redirected to the subscription page. In this page “Thank you for the subscription” message will be printed and
//  “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the 
//  home page.

var express = require("express");
var path = require("path")
var app = express();
var sp = path.join(__dirname, "../public")
app.use(express.static(sp,{index:'Middleware_Task.html'}))
app.get("/login",(req,res,next)=>{
    res.set("content-type","text/html");
    res.write("<h3>Welcome "+req.query.uname+"</h3>");
    res.write("<h3>Your Email is"+req.query.email+"</h3>");
    next();
});
app.get("/login",(req,res,next)=>{
    console.log(req.query.sub);
    if(req.query.sub=="on"){
        res.write("<h3>Thank you for the subscription</h3>")
        res.write("<a href='/'>Logout</a>")
    } 
    else{
        res.write("<h3>You can subscribe to get daily updates</h3>")
        res.write("<a href='/subscription'>Subscribe</a>")
    }
    next();
});
app.get("/subscription",(req,res)=> {
    res.set("content-type","text/html");
    res.write("<h3>Thank you for the subscription</h3>")
    res.write("<a href='/'>Logout</a>")
    res.send();
});
app.listen(5008)