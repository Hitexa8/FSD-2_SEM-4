// 1. Create one HTML file which contains two number type input fields, one dropdown which contains options like 
// (select, addition, subtraction, multiplication, division) and one submit button. 
// 2. The input fields must contain the value greater than 0 else it will give a message “Please enter the valid 
// message”. Also, user must select any of the formula from the dropdown else give a message 
// “You have not selected any formula”. (Message will be displayed on “/calc” page.) 
// 3.If one formula is selected and numbers are entered then respective calculations will be performed on the page “/calc”.
// 4.Use get method to request data.
// write express script to print msg in next line splitting by full stop and use get method to submit the Data.
// Html file contains form of textarea for msg and submit Button.
var express = require('express');
var app = express();
var path = require('path')
const sp = path.join(__dirname,"../public")
app.use(express.static(sp,{index:"Task2.html"}))
app.get('/calc', function (req, res) {
number1=parseInt(req.query.num1)
number2=parseInt(req.query.num2)
calc = req.query.calculator
    if (number1<0 || number2<0){
       res.write("Please enter the valid message”")
    }
   else if(calc=='Add'){
    res.write("The result is "+(number1+number2).toString())
   }
   else if(calc=='Sub'){
    res.write("The result is "+(number1-number2).toString())
   }
   else if(calc=='Mul'){
    res.write("The result is "+(number1*number2).toString())
   }
   else{
    res.write("The result is "+(number1/number2).toString())
   }
    res.send();
})
app.listen(8000)



