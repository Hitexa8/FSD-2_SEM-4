// write express srcipt to print how much time user visit site if user click 1st time msg should be displayed you 
// have visited page first time ad if user visit 2nd time then print user visit 2nd time and so on
var expr = require("express")
var app = expr()
const sess = require("express-session")
app.use(sess({secret:"LJU",resave:false,saveUninitialized:false}))
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send("<h1 style='color:blue'>You visited this page "+req.session.page_views+" times</h1>")
        }else{
            req.session.page_views = 1;
            res.send("<h1>Welcome to this page for the first time!</h1>")
        }
})
app.listen(7869);