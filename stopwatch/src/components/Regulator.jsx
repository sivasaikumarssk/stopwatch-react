import { useState } from "react";
export const Regulator = ()=>{
    const [count, setCount] = useState(0)

  const regulatorFunc = (e)=>{
    let {innerText} = e.target;
    if(innerText === "Increment"){
      setCount((el) => el+1);

    }
    if(innerText === "Decrement"){
      setCount((el) => el - 1 );
    }
    if(innerText === "Reset"){
      setCount(0)
    }
    if(innerText === "Multiply by 2"){
      setCount((el) => el *2 );
    }
  }
  return (
    <div className="App">
      
      <h2>Regulator</h2>
      <h2>Counter : {count}</h2>
      <button onClick={regulatorFunc}>Increment</button>
      <button onClick={regulatorFunc}>Decrement</button>
      <button onClick={regulatorFunc}>Reset</button>
      <button onClick={regulatorFunc}>Multiply by 2</button>
      <br />
      <hr/>
     
    </div>
  )
}