url = require("url")
addr = "http://localhost:8085/default.html?Name=Prof.Khushbu_Patel&initial=PKP"
var q = url.parse(addr,true)
x=JSON.stringify(q.query)
console.log(x)
console.log(q.host)
console.log(q.pathname)
console.log(q.query)


// wap to find whether a year is leap or not from static url.
url = require("url")
addr = "http://localhost:8080/default.html?year=2025&month=feb"
var leap = url.parse(addr,true)
check_leap = leap.query.year
if ((check_leap%400 == 0) || (check_leap%4==0 && check_leap%100!=0)){
    console.log("leap Year")
}
else{
    console.log("Not leap Year")
}