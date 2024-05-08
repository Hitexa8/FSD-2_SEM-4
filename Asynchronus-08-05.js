//  syntax:-
//   writeFile(filename,data,cb)
//   data=readFile(filename,encoding,cb)
//   appendFile(filename,data,cb)

// var Fs = require("fs")
// Fs.writeFile("abc.txt","Hello",function (err) {if(err){console.log(err)}else{console.log("Written completed")}})
// Fs.readFile("abc.txt","utf-8",function(err,data) {if(err){console.log(err)}else{console.log(data)}})
// Fs.writeFile("pqr.txt","Today is good day.\n",()=>{Fs.appendFile("pqr.txt","is it?",()=>{Fs.readFile("pqr.txt",(err,data)=>{if(err){console.log(err)}else{console.log(data.toString())}})})})
// Fs.appendFile("xyz.txt","Hello\n how are you?",function (err) {if(err){console.log(err)}else{console.log("Written completed")}})


// program-1
// write a node jipt to take 5 single digit element separated by white space in .txt file.print sorted array of 
// this 5 elements in s scrterms of integer on node js server.
var Fs = require("fs")
var data=Fs.readFileSync("Program.txt","Utf-8").split(" ")
for(i=0;i<data.length;i++){
    data[i]=parseInt(data[i])
}
console.log(data.sort())

// program-2
// write a file using one json obj and read the file which gives you the same json obj in console.
// var Fs = require("fs")
// var obj={"Name":"hitexa"}
// Fs.writeFile("Program2.txt",JSON.stringify(obj),()=>{Fs.readFile("Program2.txt",(err,data)=>{if(err){console.log(err)}else{console.log(JSON.parse(data))}})})

var Fs = require("fs")
data={"Name":"hitexa"}
Fs.writeFileSync("Program2.txt",JSON.stringify(data))
data2=Fs.readFileSync("Program2.txt")
console.log(JSON.parse(data2))



