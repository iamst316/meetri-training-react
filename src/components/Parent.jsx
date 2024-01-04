import { useState } from "react"
import Child from "./Child";


export default function(){
    const [parentObject, setParent] = useState([
        {
            id: 10001,
            charges: 299
        },
        {
            id: 10002,
            charges: 429
        },
        {
            id: 10003,
            charges: 499
        },
        {
            id: 10004,
            charges: 299
        }
    ]);

    function handleCallback(childEntry){
        setParent([...parentObject,childEntry])
    }

    return (<div>
        <div className="parent-title title">Parent Component</div>

        <div className="list-display">
            {parentObject.map((entry)=>{
                return <Child handleCallback={handleCallback} entry={entry} />
            })}
        </div>

        <div>
            {parentObject.map((entry)=>{
                return <div>{entry.id}</div>
            })}
        </div>
        
    </div>)
}