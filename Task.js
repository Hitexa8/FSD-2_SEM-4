// Task1
// student={
//     u1:[{name:"LJU",id:1},
//     {name:"LJU1",id:2},
//     {name:"LJU2",id:3}]}

// var expr = require("express")
// var app = expr()

// app.get("/",(req,res)=>{
//     res.set("content-type","text/html")     
//     res.write("<center><table border='1px solid'><tr><th>Name</th><th>ID</th></tr>")
//     for(i of student.u1){
//         res.write("<tr><td>"+i.name+"</td>")
//         res.write("<td>"+i.name+"</td></tr>")
//     }
//     res.write("</table>")
//     res.send()
// })
// app.listen(3000)



var expr = require("express")
var app = expr();
student = [{name:"abc",age:20},
{name:"def",age:34},
{name:"xyz",age:11}]
app.get("/",(req,res)=>{
    res.set("content-type","application/json")
    res.send(student)
})
app.get('/sorted',(req,res)=>{
    res.set("content-type","application/json")
    for (i = 0; i < student.length; i++) {
        for (j = 0; j < student.length; j++) {
            if(student[i].age>student[j].age){
                temp = student[i]
                student[i] = student[j]
                student[j] = temp
            }
        }}
    res.write(JSON.stringify(student))
    res.send()
    
})
app.listen(3001)
