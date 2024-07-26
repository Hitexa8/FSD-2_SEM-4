// Create react app which contains form with following fields.
// • First Name(Input type text)
// • Lastname(Input type text)
// • Email(Input type email)
// • Password(Input type password)
// • Message (Textarea)
// • Gender(Radio Button)
// • City (Dropdown)
// Display submitted values in alert box. (Using useState Hook)
import React from 'react'
import { useState } from 'react';

function ReactTask2() {
    const[formdata,setformdata]=useState({});

    function handlechange(event){
        const name = event.target.name;
        const value = event.target.value;
        setformdata({...formdata,[name]: value})
    }
    function handlesubmit(event) {
        event.preventDefault();
        alert("Your form has been submitted.\nName: " + formdata.fname + formdata.lname +"\nEmail: " + formdata.email
        + "\nCity: "+ formdata.city +"\nGender:"+formdata.gen)
        }
    
    return (
        <>
        <form onSubmit={handlesubmit}>
            First Name:<input type='text' name="fname" onChange={handlechange}/>
            <br></br> <br></br>
            last Name:<input type='text' name='lname' onChange={handlechange}/>
            <br></br> <br></br>
            Email:<input type='email' name='email' onChange={handlechange}/>
            <br></br> <br></br>
            Password:<input type='password' name='pass' onChange={handlechange}/>
            <br></br> <br></br>
            Message:<textarea name='msg' onChange={handlechange}></textarea>
            <br></br> <br></br>
            <input type='radio' name='gen' value="Male" onChange={handlechange}/>Male
            <input type='radio' name='gen' value="Female" onChange={handlechange}/>Female
            <input type='radio' name='gen' value="Other" onChange={handlechange}/>Other
            <br></br> <br></br>
            <select onChange={handlechange} name='city'>
                <option value='delhi'>Delhi</option>
                <option value='mumbai'>Mumbai</option>
                <option value='chennai'>Chennai</option>
            </select>
            <button type="submit">Submit</button> <br/>
        </form>
        </>
    )
}

export default ReactTask2
