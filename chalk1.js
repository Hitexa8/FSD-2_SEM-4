import ch from 'chalk'
import { log } from 'console';
console.log("LJU");
console.log("Hello"+ch.bgCyan("LJU")+"GM");
console.log(ch.blue("Hello"));

console.log("LJU")
console.log("Hello"+ch.bgCyan(" LJU ")+"Good Morning")
console.log(ch.blue("Hello"))
console.log(ch.red("Hello",ch.underline.bgYellow("World")+"!"))
console.log(ch.green.bold("I am Chalk"))
console.log(ch.rgb(123,45,67).underline("Underlined Raddish Colour"))
console.log(ch.hex("#DEADED").italic("Italic Grey"))