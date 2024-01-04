import { useState, useEffect, useRef } from "react"

export default function(){

    const [count, setCount] = useState(0);
    const [sideCount, setSideCount] = useState(0);
    const divRef = useRef("");

    useEffect(()=>{
        if(count>0){
            setSideCount(sideCount+1);
        }
    },[count])

    function HandleRef(){
        divRef.current.innerText = "Hello";
        divRef.current.style.fontSize = "3rem";
        setTimeout(()=>{
            divRef.current.style.fontWeight = "700";
        },2000)
        setTimeout(()=>{
            divRef.current.style.color = "#abcdef";
        },3000)
        // console.log(divRef);
    }

    return(<div>
        <button onClick={()=>setCount(count-1)}>-</button>
        {count}
        <button onClick={()=>setCount(count+1)}>+</button>

        <h4>Side Count: {sideCount}</h4>

        <div ref={divRef}></div>
        <button onClick={HandleRef}>Log</button>
    </div>)
}