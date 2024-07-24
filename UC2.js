import UC3 from  './UC3.js'
import React, { createContext } from "react"

const student  =  createContext();
function UC2() {
    return(
        <student.provider value='Hitexa'>
            <UC3/>
        </student.provider>
    )
}

export default UC2
export {student}
