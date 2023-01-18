// state is not native to function components the function component is the best way to write the component in react it will utilize hooks so state can be used
// we can call the useState with the method below
// import React, { useState } from "react";

// using obj deconstruction in the CounterHooks function to call props. initialCount is the prop/ attribute on CounterHooks.
// export default function CounterHooks({ initialCount }) {
//const [state, setState] = useState({ count: initialCount }) use array deconstruction to utilize the state. stat is how we get things operating and be interactive.
// const [count, setCount] = useState({ initialCount })// instead of calling the full array using state you can switch state to count to help simplify the onclick code 
//     return (
//         <div>
//             {/*<button onClick={() => setState(prevState => { return { count: prevState.count - 1 } })}>-</button> {/*using the full array of state , this is the same for the add btn*/}
//             <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//             {/* <span>{state.count}</span> the span is what you would use with using the full array of state */}
//             <span>{count}</span>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//         </div>
//     )
// }

import React, { useContext, useState } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return (
        <div>
            <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}

