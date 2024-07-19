
import { useState } from "react";

function Calculator() {
const[input1,setInput1] = useState(0)
const[input2,setInput2] = useState(0)
const[result,setResult] = useState(0)

function handlenum1(event) {
    setInput1(parseInt(event.target.value))
}
function handlenum2(event) {
    setInput2(parseInt(event.target.value))
}
function handleadd() {
    setResult(input1+input2)
}
function handlesub() {
    setResult(input1-input2)
}
function handleamul() {
    setResult(input1*input2)
}
function handlediv() {
    setResult(input1/input2)
}
return(
       <>
            Number1:<input type="number" onChange={handlenum1}></input>
            <br></br>
            Number2:<input type="number" onChange={handlenum2}></input>
            <br></br><br></br>
            <button onClick={handleadd}>Addition</button>
            <button onClick={handlesub}>Subtraction</button>
            <button onClick={handleamul}>Multiplication</button>
            <button onClick={handlediv}>divison</button>
            <h2>output is {result}</h2>
        </>
    )
}
export default Calculator