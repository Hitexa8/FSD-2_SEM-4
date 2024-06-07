var expr=require("express")
var app=expr()
var cp=require('cookie-parser')
app.use(cp())
app.get("/",(req,res)=>{
    res.cookie("fname","Hitexa") //Sets fname
    res.cookie("lname","Ingle") //Sets lname
    res.cookie("contact","001100",{expires:new Date(Date.now()+10000)})
    res.send("cookies set")
});
app.get("/cookie",(req,res)=>
{
res.write(JSON.stringify(req.cookies));
res.write(req.cookies.fname);
res.send()
});
app.get("/clear",(req,res)=>{ 
    res.clearCookie("lname")
    res.send("cleared") 
});
app.listen(5002)