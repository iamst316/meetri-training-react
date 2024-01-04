import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"

export default function(){
    const now = useRef(Date.now());
    const [time, setTime] = useState(null);
    
    function Start(){
        // console.log(now);

        now.current = setInterval(()=>{
            setTime(Date.now());
            
        },100)
    }

    function Stop(){
        clearInterval(now.current);
        // setTime(now.current);
    }

    function Reset(){
        Stop()
        setTime("")
    }

    return(<div>
        <div>Time - {time}</div>
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
        <button onClick={Reset}>Reset</button>
    </div>)
}