var expr = require("express");
var app = expr();
app.set("view engine","pug");
var p = require("path");
const staticp = p.join(__dirname,"../public");
app.get("/",(req,res)=>{
res.render(staticp+"/one");
});
app.get("/about",(req,res)=>{
res.write("<h1>Welcome to about page</h1>");
res.send();
});
app.listen(6783);