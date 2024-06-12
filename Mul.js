var expr = require("express")
var app = expr()
const multer = require('multer');
var store = multer.diskStorage({
destination:"myfolder",
filename: (req, file, cb) =>{
cb(null, file.originalname)
console.log(file)
}
})
var upload = multer({ storage: store }).single('mypic')
app.use(expr.static('../public',{index:"Mul.html"}))
app.post('/uploadfile', upload, (req, res) => {
    if (req.file) {
    res.send("<h1>File <span style='color:red'>"+ req.file.originalname + "</span> has been uploaded in <span style='color:red'>" + req.file.destination + " </span>folder")
    }
})
    app.listen(6788)