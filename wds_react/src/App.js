
/*function App() {
  return (
    // the react functions only returns on thing and no more. returning an h1 and h3 cn not happen unless it is wrapped in <> </> or a div. when wrapped it is then only returning one item. I would suggest using the bracket method <> </>.
    <>
      <h1>
        Hello World
      </h1>
      <h3>Subtitle</h3>
    </>
  )
}*/


// function App() {
//   return <div>
//     <button>-</button> {/*class is reserved for javascript so JSX to name things using a class will need to be calssName*/}
//     <span>0</span>  {/*in react every thing needs a closing tag or a closing end point EXP <input type="text"/> or <input type="text"></input>*/}
//     <button>+</button>
//   </div>
// }
import React, { useState } from "react";
import Counter from "./Counter"; /*this method is using a Component to pull in data for the counter*/
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />  {/*the initialCount is known as a prop. setting the start point of the counter to zero. the zero is in { } brackets Bc its being seen as normal js instead of JSX. */}
      CounterHooks
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
