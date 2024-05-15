// eventEmitterClass creation
var e = require('events');
var ee = new e.EventEmitter();

// eventEmitter.addListener(events,listeners)
// eventEmitter.on(events,listeners) 
// eventEmitter.emit(events,arguments Optional) 
// eventEmitter.removeListener(events,listeners) 
// eventEmitter.removeAllListeners(events) 

ee.on('SayName', () => {
    console.log('Your Name is XYZ')});
    ee.emit('SayName');


var e = require('events');
var ee = new e.EventEmitter();
ee.on('start', (start, end) => {
console.log(`started from ${start} to ${end}`);
});
ee.emit('start', 1, 100);



var e = require('events');
var ee = new e.EventEmitter();
ee.on('SayName', () => {
    console.log('Your Name is Hitexa')});

ee.on('SayName', () => {
    console.log('Your Middlename is Shirish')});

ee.on('SayName', () => {
        console.log('Your Surname is Ingle')});

ee.emit('SayName');
