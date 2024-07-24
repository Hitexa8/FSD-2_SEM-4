// use multiple context to in create application by training uc1 create a context for css styling and provide it in to uc3.js file.
// iN uc2.JS CREATE A CONTEXT for astring having value student and provide it consume both the context and display msg with providing string having style

import React, { createContext } from "react"

import UC2 from  './UC2.js'
const style1 = createContext();
const style = {color:'blue',item:'center'}
function UC1() {
    return(
        <style1.provider value='style'>
            <UC2/>
        </style1.provider>                              
    )
}

export default UC1
export {style1}
