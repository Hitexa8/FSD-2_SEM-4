//Method 1
var expr = require("express");
var app = expr();

// middle 1
const cb=(req,res,next)=>
{
console.log("Initalized");
res.set("content-type","text/html")
res.write("<h1>First</h1>");
next();
}

// middle 2
const cb1=(req,res,next)=>
{
res.write("<h1>Second</h1>");
next();
}

// binding 2 middlewares
app.use('/ee',cb,cb1)
app.get('/ee',(req,res)=>{
    res.write("<h1>Hello Welcome to LJU</h1>");
    res.send();
})
app.listen(5258)