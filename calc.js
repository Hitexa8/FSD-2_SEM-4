// Method 1 (Export module with full name using ES6)
   const add=(a,b)=>{
    return a+b
    }
    module.exports=add


// Method 2 ( Export more than one function)
   const sub=(a,b)=>
    {
    return(a-b);
    }
    const mul=(a,b)=>
    {
    return(a*b);
    }
    
    module.exports.s=sub;
    module.exports.m=mul


// Method 3(obj.destructing)
    const sub1=(a,b)=>
    {
    return(a-b);
    }
    const mul1=(a,b)=>
    {
    return(a*b);
    }
    module.exports.d2=sub1;
    module.exports.e2=mul1;

// Method 4 (Export in single line including variable name) 
    const sub2=(a,b)=>
    {
    return(a-b);
    }
    const mul2=(a,b)=>
    {
    return(a*b);
    }
    const name="Hello"
    module.exports={sub2,mul2,name};


// method 5
    exports.add3 = function(x,y) {
        return x+y
    }
    exports.mul3 = function(x,y) {
        return x*y
    }
