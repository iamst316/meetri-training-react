import { useEffect } from "react";
import { useState } from "react"

export default function(){
    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     setCount(count+1);
    // },[count])
    return(<>
        <div>Count - {count}</div>
        <button onClick={()=> setCount(count+1)}>Add</button>
    </>)
}