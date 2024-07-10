import React from 'react';
function Event1() {
const mystyle = {
color : "white", backgroundColor: "#000000"};
const handleClick = () => {
alert ('Welcome to LJU');
}
return (
<div>
<center>
<button style = {mystyle} onClick={handleClick}>
{/*<button onClick={handleClick}>*/}
Click me
</button>
</center>
</div>
);
}
export default Event1;