import React from 'react';
function change() {
function handleChange(event) {
console.log (event.target.value);
}
return (
<input type="text" name="firstName" onChange={handleChange} />
);
}
export default change;