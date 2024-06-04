var express = require('express');
var app = express();
var path = require('path')
const sp = path.join(__dirname,"../public")
app.use(express.static(sp,{index:"get.html"}))
app.get('/process-get', function (req, res) {
response = {
Username:req.query.firstname,
Password:req.query.password,
comm:req.query.comment
};
console.log(response);
res.send(response);
})
app.listen(8000)