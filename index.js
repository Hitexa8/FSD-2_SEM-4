// create your own module


// Method 1 (Export module with full name using ES6)
var d=require('./calc.js')
console.log(d(10,20))


// Method 2 ( Export more than one function)
var d1=require("./calc.js ");
console.log(d1.s(10,5));
console.log(d1.m(10,15));

// Method 3(obj.destructing)
var {d2,e2}=require("./calc.js ");
    console.log(d2(10,7));
    console.log(e2(10,12));

// Method 4 (Export in single line including variable name) 
var {sub,mul,name}=require("./calc.js ");
    console.log(sub(100,20));
    console.log(mul(10,2));
    console.log(name)

// Method 5
calculator = require('./calc.js')
console.log(calculator.add(10,20))
console.log(calculator.mul(10,20))