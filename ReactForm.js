import { useState } from 'react';
function MyForm() {
const [name, setName] = useState("");
return (
<form>
<label>Enter your name:
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
</label>
{/*<br/> <h1> Entered Value: {name}</h1> To check entered values*/}
</form>
) }
export default MyForm