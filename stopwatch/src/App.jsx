import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react';
import {Regulator } from "./components/Regulator"
import {Timer} from "./components/Stoptimer"


function App() {

  const [toggle,setToggle] = useState(true)
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

  return (
    <div className="App">
     <button onClick={()=> setToggle(!toggle)}>{toggle? "stopwatch" : "regulator"}</button>
      {toggle ? (
        <div>
          <Regulator/>
          <Timer/>
        </div>
      ):(
        <div>
        <h2>Stopwatch - React</h2>
      <h2>days: {remDays}</h2>
      <h2>hours : {remHours}</h2>
      <h2>minutes : {remMin}</h2>
      <h2>seconds: {remSec}</h2>
      <button >stop timer</button> 
        </div>
      )}
       
    </div>
  )
}

export default App
