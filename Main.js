import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from './Home';
import Contact from './contact'
import Product from './Product'
import Nopage from './nopage';
function Main() {
return (
<div>
<Router>
<div className='main-route'>
<ul style={{display:"flex",align:"center",justifyContent:"space-evenly"}}>
<li><Link to="/">Home</Link></li>
<li><Link to="/ Product "> Product </Link></li>
<li><Link to="/ Contact ">Contact</Link></li>
</ul>
</div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="Contact" element={<Contact/>}/>
<Route path="Product" element={< Product/>}/>
<Route path="*" element={<Nopage/>}/>
</Routes>
</Router>
</div>
)};
export default Main
