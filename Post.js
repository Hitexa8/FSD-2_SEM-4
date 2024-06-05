var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require("path");
app.use(bp.urlencoded({ extended: false }));
var sp = path.join(__dirname, "../public")
app.use(express.static(sp,{index:'Post.html'}))
app.post('/process', function (req, res) {
res.write(req.body.first_name+" ");
res.write(req.body.last_name);
res.send()
})
app.listen(7002)