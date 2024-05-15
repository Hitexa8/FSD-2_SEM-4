import validator from "validator"
var email = 'test@gmail.com'
console.log(validator.isEmail(email)) // true

var email1 = '@test'
console.log(validator.isEmail(email1)) // false

console.log(validator.isLowercase("HelloJu")); // false
console.log(validator.isHexadecimal('ABC')); // true
console.log(validator.isEmpty(" ")); // false
console.log(validator.isCurrency("123")); // true
console.log(validator.isDecimal("1.22")); // true
console.log(validator.isJSON('{"name":"ABC","age":30}')); // true