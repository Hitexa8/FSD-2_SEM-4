import React from 'react'
import { useState } from 'react';

function Form() {
    const [size, setSize] = useState('select size');
    return (
        <>
        <h3>Select pizza size</h3>
        <form>
            <input type="radio" name="size" value="Regular" onChange={(e) => setSize(e.target.value)}/>Regular
            <input type="radio" name="size" value="Medium" onChange={(e) => setSize(e.target.value)} />Medium
            <input type="radio" name="size" value="Large" onChange={(e) => setSize(e.target.value)} />Large
            </form>
            <h4>Selected Pizza size:{size}</h4>
        </>
    )
}

export default Form
