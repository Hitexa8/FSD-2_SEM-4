import React from 'react';
function Form () {
function handleSubmit (e) {
e.preventDefault();
alert (' You clicked submit.');
}
return (
<form onSubmit = {handleSubmit}>
<input type="text" name='uname'/>Enter name here
<button type="submit">Submit</button>
</form>
);
}
export default Form;