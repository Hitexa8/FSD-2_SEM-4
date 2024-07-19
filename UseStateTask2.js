import React,{useState} from 'react';

function UseStateTask2(){
    const [data,setData] = useState({brand:"bike",color:"black",model:"honda",year:2003})
    function onChange() {
        setData({brand:"car",color:"red",model:"mustang",year:2012})
    }
    return (
        <div>
           <h1>I have {data.brand} of {data.color}  color {data.model} from {data.year}</h1> 
           <button onClick={onChange}>Change</button>
        </div>
    );
}

export default UseStateTask2;
