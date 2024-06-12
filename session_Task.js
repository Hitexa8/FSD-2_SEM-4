// 4) write a script to meet following requirements: (session)
// a.	create index.html file page and open it on localhost.
// b.	after clicking submit button, it should jump on “savesession” page. Store username in session.
// c.	After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link 
//     button here.
// d.	Jump on delete session page after clicking LOGOUT button.
// e.	Destroy the session on this page and redirect to index.html page.
var expr = require("express")
var app = expr()
var path = require("path")
const sess = require("express-session")

app.use(sess({secret:"1",resave:false,saveUninitialized:false}))

const staticpath = path.join(__dirname,"../public");
app.use(expr.static(staticpath,{index:"session_Task.html"})); 

app.get("/savesession",(req,res)=>{
    req.session.username = req.query.username
    res.redirect("/fetchsession")
})

app.get("/fetchsession",(req,res)=>{
    res.write("<h1>Welcome"+req.session.username+"<h1>")
    res.write("<a href='/deletesession'>LOGOUT</a>")
    res.send()
})

app.get("/deletesession",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

app.listen(1234)

