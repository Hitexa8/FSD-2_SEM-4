// Write node.js script to create a class named person by assigning name and age in form of members. Create one function named elder which 
// returns elder person object. Details of elder person should be printed in console as well as in file.

class Person{
    constructor(name,age) {
        this.name=name
        this.age=age
    }

    elder=(P)=>{
        if(this.age>P.age)
            {
            return this;
            }
            else{
            return P;
            }
    }
}

var p1=new Person("DHRUMIL TRADA",22)
var p2=new Person("HITEXA INGLE",21)
var p3=p1.elder(p2);
console.log(p3)
console.log("elder Person is" + " " + p3.name)
Fs = require('fs')
Fs.writeFileSync("d2.txt",JSON.stringify(p3))
 