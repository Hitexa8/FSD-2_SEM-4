// write express script to print msg in next line splitting by full stop and use get method to submit the Data.
// Html file contains form of textarea for msg and submit Button.
var express = require('express');
var app = express();
var path = require('path')
const sp = path.join(__dirname,"../public")
app.use(express.static(sp,{index:"Task1.html"}))
app.get('/split-get', function (req, res) {
    l = req.query.comment.split('.')
    for(i of l){
        res.write(i+"\n");
    }
    res.send();
    })
    app.listen(8000)
