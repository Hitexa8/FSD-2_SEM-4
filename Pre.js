import React from 'react'
// const example = (props)=>{
//     return(
//         <div>
//             <h1>{props.Name}:{props.Price}</h1>
//         </div>
//     )
// }
// export default example

// Task1
// Write a program using ReactJS in which you’ve to create two variable names -
// Student_name and University_name, these both values should be passed to another
// component names_Details where these values are printed using props.
const example = (props)=>{
        return(
            <div>
                <h1>{props.data.student_name} is from {props.data.University_name}</h1>
            </div>
        )
    }
    export default example