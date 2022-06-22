import { useEffect } from "react";
import { useState } from "react"


export const Timer = ()=>{
    const [time,setTime] = useState(59);
    const [minute,setMinute] = useState(1);
    const [ms,setMs]= useState(59);
    useEffect(()=>{
        
     const id = setInterval(()=>{
            console.log("a",time)
            setTime((prev)=> {
                if(prev <= 1){
                    clearInterval(id);
                    return 0;
                }
                return prev-1;
            });
        },3000);
        return ()=>{
            clearInterval(id)
        }
    },[])
    useEffect(()=>{
        
        const id = setInterval(()=>{
               console.log("b",minute)
               setMinute((prev)=> {
                   if(prev <= 1){
                       
                       return 0;
                   }
                   return prev -1;
               });
           },60000);
           return ()=>{
            clearInterval(id)
        }
       },[])

       useEffect(()=>{
        
        const id = setInterval(()=>{
               console.log("ms",ms)
               setMs((prev)=> {
                   if(prev < 1){
                    //    setMs(59);
                       return 0;
                   }
                   return prev-1;
               });
           },50);
           return ()=>{
               clearInterval(id)
           }
       },[ms])
       const stopIt = ()=>{
        setMs(0);
        setMinute(0);
        setTime(0)
       }
    return(
        <div>
            <h2>Min:{minute}</h2>
            <h2>seconds : {time}</h2>
            <h2>milli-seconds : {ms}</h2>
            <button onClick={stopIt}>stop</button>
        </div>
    )


}