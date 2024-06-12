const expr = require('express')
const multer = require('multer');
const app = expr();
// SET STORAGE
var store = multer.diskStorage({
destination:"multiple",
filename: function (req, file, cb) {
cb(null, file.fieldname+"-"+Date.now()+".docx") 
console.log(file)
}
})

var upload = multer({ storage: store }).array('myfile',5)
app.use(expr.static('../public',{index:"Mul2.html"}))

app.post('/uploadfile', upload, (req,res) => {
if (req.files) {
res.set("content-type","text/html")
for(i of req.files){
res.write("<h2>File <span style='color:red'>" + JSON.stringify(i.originalname) +
"</span> has been uploaded </h2>")
}
res.send()
}
})
app.listen(6788);