// PROGRAM-1
// Write a NodeJs script to create two listeners for a common event. Call their
// respective callbacks. Print no. of events associated with an emitter. Remove one of the
// listener and print no of remaining listeners.

var e = require('events');
var ee = new e.EventEmitter();

var listener1 = function listener1() {
    console.log("Listener 1 executed");
}

var listener2 = function listener2() {
    console.log("Listener 2 executed");
}

ee.addListener("conn",listener1)
ee.addListener("conn",listener2)
var count = ee.listenerCount("conn")
console.log(count);
ee.emit("conn") 
ee.removeListener("conn",listener1)
var count1 = ee.listenerCount("conn")
console.log(count1);
ee.emit("conn")


// PROGRAM-2
var e = require('events');
var ee = new e.EventEmitter();
var fs = require('fs')
ee.on('write',()=>{fs.writeFile('new.txt','This is data',()=>{console.log('successfully written in file') 
ee.emit('append')})})
ee.on('append',()=>{fs.appendFile('new.txt','\nThis is data',()=>{console.log('successfully Append in file')
ee.emit('read')})})
ee.on('read',()=>{fs.readFile('new.txt','utf-8',(err,data)=>{console.log(data) 
ee.emit('finish')
})})
ee.on('finish',()=>{console.log('Thanks')})
ee.emit('write')
