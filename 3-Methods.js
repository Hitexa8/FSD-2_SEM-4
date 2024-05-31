// // method 1
// // Send JSON object using res.write
// const expr=require("express")
// const app=expr();
// student={name:"LJU",age:28}
// app.get("/",(req,res)=>{
// res.set("content-type", "text/html")
// res.write(JSON.stringify(student))
// res.send()
// })
// app.listen(6007)


// // method 2
// // Send JSON object using res.send
// const expr=require("express")
// const app1=expr();
// student={name:"LJU",age:28}
// app1.get("/",(req,res)=>{
// res.set("content-type","text/html")
// res.send(student)//res.send automatically converts data in string format
// })
// app1.listen(6007)


// Method 3
const expr=require("express")
const app2=expr();
app2.get("/",(req,res)=>{
res.set("content-type","text/html")
res.json({ name: 'ABC' })
})
app2.listen(6007)

