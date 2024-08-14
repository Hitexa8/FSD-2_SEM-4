const mg = require('mongoose');
mg.connect("mongodb://127.0.0.1:27017/test")
.then(()=>{console.log("success")})
.catch((err)=>{console.error(err)});


//step2:schema
const mySchema=new mg.Schema({
    name:{type:String,required:true}, //name must be given else error
    surname:String,
    age:Number,
    active:Boolean,
    date:{type:Date,default:new Date()}
})

//step3:model
const person=new mg.model("person",mySchema)

// it will automatically converted to “people” by mongoose
mg.pluralize(null) // to add collection as we have mentioned


//step3:Inserting data
const persondata=new person({
    name:"DDD",
    surname:"PQR2",
    age:2,
    active:true
})
persondata.save()

//to add multiple data at once
const persondata2=new person({
    name:"ABC2",
    surname:"PQR2",
    age:2,
    active:true
})
persondata2.save()