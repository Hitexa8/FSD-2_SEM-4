// build basic react app with one h1 element having name in itallic blue color with fontsize 50px, one ordered list of
// 3 fruits,current time and current date with it.addEventListener('type', listener, options)

function task() {
    return(
        <div>
            <h1 style={{fontFamily:'italic',color:'blue',fontSize:50}}>Hitexa</h1>
            <ol>
                <li>Apple</li>
                <li>Orange</li>
                <li>Banana</li>
            </ol>
                <p>Current Time: {new Date().toLocaleTimeString()}</p>
                <p>Current Date: {new Date().toLocaleDateString()}</p>
        </div>
    )
}
export default task;