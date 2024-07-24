import { style1 } from "./UC1";
import { student } from "./UC2";
import React, { useContext } from "react"


function Comp3(){
    const style = useContext(style1)
    const name = useContext(student)
    return (
    <h1 style={{style}}>{name}</h1>
    )
    }
    export default Comp3