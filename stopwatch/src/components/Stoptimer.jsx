import { useEffect } from "react";
import { useState } from "react"


export const Timer = ()=>{
    const [time,setTime] = useState(59);
    const [minute,setMinute] = useState(1)
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
        },1000);
        return ()=>{
            clearInterval(id)
        }
    },[])
    useEffect(()=>{
        
        const id = setInterval(()=>{
               console.log("b",minute)
               setMinute((prev)=> {
                   if(prev <= 1){
                       clearInterval(id);
                       return 0;
                   }
                   return prev -1;
               });
           },60000);
           return ()=>{
            clearInterval(id)
        }
       },[])
    return(
        <div>
            <h2>Min:{minute}</h2>
            <h2>count : {time}</h2>
        </div>
    )


}