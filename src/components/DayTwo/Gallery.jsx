import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {add } from "../../redux/slices/gallerySlice";


function Input(){
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    function AddName(){
        dispatch(add(name));
        setName("");
    }
    return (<div>
        <div className="title">Input</div>
        <input onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder="Enter a Name"/>

        <button onClick={AddName}>Add To Gallery</button>

    </div>)
}


export default function(){ 
    const [idx, setIdx] = useState(0);
    const list = useSelector(state => state.gallery.value);

    function Increment(){
        let l = list.length;
        
        idx==l-1 ? setIdx(0) : setIdx(idx+1) ;

    }
    function Decrement(){
        let l = list.length;
        
        idx==0 ? setIdx(l-1) : setIdx(idx-1) ;
    }
    return (<div>
        <Input />
        <div>
            <div className="title">Display Gallery</div>
            <div>
                <button onClick={()=>Decrement()}>-</button>
                
                <div className="title">{list[idx]}</div>

                <button onClick={()=>Increment()}>+</button>
            </div>
        </div>
    </div>)
}