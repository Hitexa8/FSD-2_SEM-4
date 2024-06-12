// create a form for the username,email and rating.In rating radio button for good,excellent value etc.
var expr=require("express")
var path = require("path")
var app=expr()
var cp=require('cookie-parser')
const staticpath = path.join(__dirname,"../public");
app.use(expr.static(staticpath,{index:"cookie_Task.html"})); 
app.use(cp())
app.get("/cookie1",(req,res)=>{
    const Feedback = req.query
    res.set("content-type","text/html")
    res.write("Thanks <a href='/show'>Show</a>")
    res.send()
})
app.get("/show",(req,res)=>{
    res.write(JSON.stringify(Feedback))
})
app.listen(5004)

 