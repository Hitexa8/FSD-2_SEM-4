import React, { useState } from 'react';

// function US1() {
// const [count, setCount] = useState(0);
// function addcount () {
//     if(count>=0 && count<10){
//         setCount(count+1);
//     }
// }
// function removecount () {
//     if(count>0){
//         setCount(count-1);
//     }
//     }
// return (
// <div>
// <p>You clicked {count} times</p>
// <button onClick={addcount}>Increase value</button>
// <button onClick={removecount}>Decrease value</button>
// </div>
// );
// }


// function US1(){
// const [color, setColor] = useState("red");
// function changebackground() {
//     setColor("green")
// }
// return(
// <>
// <div className='w-100 h-100 rounded text-white bottom-12' style={{backgroundColor:color}}>backgroundColor</div>
// <button onClick={changebackground} className='inset-x-0'>click me</button>
// </>
// )
// }
// import Mobile from './mobile.jfif'
// import Laptop from './laptop.jfif'
// function US1(){
// const [image, updatedimage] = useState(Mobile);
// function updateimage() {
//     updatedimage(Laptop)
// }
// return(
//     <>
//     <div>
//       <img src={image} alt="mobile"></img>
//    <button onClick={updateimage} >click me to change image</button>
//     </div>
//     </>
// )
// }
// export default US1

// write a prg to build react app having 2 imput fields and display same output in the same place.
// function USTask() {
// const [name, setName] = useState(" ");
// const [email, setEmail] = useState(" ");
// function display(event) {
//     setName(event.target.value)
// }
// function display1(event) {
//     setEmail(event.target.value)
// }
// return(
//     <>
//     <form>
//         <input type='text' value={name} onChange={display}>Enter your name</input>
//         <input type='email' value={email} onChange={display1}>Enter your email</input>
//     </form>
//     <br/>
//     <h1>First Name: {name}<br/>email: {email}</h1>
//     </>
// )
// }
// export default USTask

// Example 6: Write a program having a button “show”. By clicking a button, it will
// display text and button text will be changed as “Hide”. By clicking Hide button, the text
// will be disappeared and button text will become “show” again.
function USTask() {
const [btntext,setBtntext]= useState("show")
const [text,setText]= useState("")
function showhide() {
if(btntext==="show")
{
setBtntext("hide");
setText("Hello");
}
else{
    setBtntext("show");
    setText("");
} }
return (
<div>
<button onClick ={showhide}>{btntext}</button>
<p>{text}</p>

</div>
) }
export default USTask
