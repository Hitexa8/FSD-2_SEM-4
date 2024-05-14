// var http= require("http")
// var url = require("url")
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'})
//     var q = url.parse(req.url,true).query
//     txt = q.year+" "+q.month
//     res.end(txt)
// }).listen(8086) 


// fETCH filename from requested url and print the data on that server

fs=require('fs')
url=require('url')
http=require('http')

http.createServer(function(req,res){
    
    res.writeHead(200,{'content-Type':'text/html'})
    Data=url.parse(req.url,true)
    data=fs.readFileSync("."+Data.filename,'utf-8')
    res.end(data)
}).listen(8086)