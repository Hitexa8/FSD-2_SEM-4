// var ps = require("os")
// console.log(ps.arch())
// console.log(ps.hostname())
// console.log(ps.platform())
// console.log(ps.tmpdir())
// console.log(ps.freemem())

// wanjs to create a file named temp.txt check  if physical memory is greater than 1 GB then print msg sufficient memory in the file
// else print msg low memory in the file.
var ps = require("os")
var Fs = require("fs")

var a=ps.freemem()
b=1024*1024*1024

if(a>b){
    Fs.writeFileSync("xyz1.txt","Suffient Memory")
}
else{
    Fs.writeFileSync("xyz1.txt","Low Memory")
}
// wnjs to create a folder aa at temp folder also create a file named temp1.txt inside aa folderaa.now check if 
// working on 32 bit then print you are working on windows 32 else you are working on windows 64.
var OS = require("os")
var Fs = require("fs")
path = OS.tmpdir()
windows = OS.platform()
Fs.mkdirSync(path+"/BB")
if (windows=="win64"){
    Fs.writeFileSync(path+"/BB/temp1.txt","You are working on win64")
}
else{
    Fs.writeFileSync(path+"/BB/temp1.txt","You are working on win32")
}


