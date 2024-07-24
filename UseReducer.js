import React, { useReducer } from 'react';
// function UR1() {
// const [state, dispatch] = useReducer(reducer, 0);
// function reducer(state,action){
// if(action.type==='increment'){
// return state+1;
// }
// if(action.type==="decrement"){
// return state-1;
// }
// }

// return (
//     <>
// <button onClick={()=> dispatch({type:"increment"})}>Increment</button>
// <button onClick={()=> dispatch({type:"decrement"})}>Decrement</button>
// <h1>{state}</h1>
// </>
// )}
// export default UR1

// Example 2: Create react js app to increase value by 5 while clicking on button. Initialize
// value with 20. Use useReducer hook to perform the task.
function UR1() {
    const [state, dispatch] = useReducer(reducer, 20);
    function reducer(state,action){
        return state+action;
    }
    return (
        <>
    <button onClick={()=> dispatch(5)}>Increment by 5</button>
    <h1>{state}</h1>
    </>
    )}
    export default UR1
