import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const endTime = new Date("June 22,2022 00:00:00").getTime();
  const [currentTime,setCurrentTime] = useState(new Date().getTime())
  const gap = endTime - currentTime;

  const seconds = 1000;
  const min = seconds* 60;
  const hours = min* 60;
  const days = hours * 24;

  const remDays = Math.floor(gap/days);
  const remHours = Math.floor((gap % days)/hours);
  const remMin = Math.floor((gap% hours)/ min);
  const remSec = Math.floor((gap % min)/ seconds);

  useEffect(()=>{
    setTimeout(()=>setCurrentTime(new Date().getTime()),1000)
  },[currentTime])


  
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
      <h2>Stopwatch - React</h2>
      <h2>days: {remDays}</h2>
      <h2>hours : {remHours}</h2>
      <h2>minutes : {remMin}</h2>
      <h2>seconds: {remSec}</h2>
      <button >stop timer</button>
    </div>
  )
}

export default App
