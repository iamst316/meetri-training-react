import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export default function(){
    const [data,setData] = useState([])
    const [fetchData, setFetch] = useState([])
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            // console.log(res)
            setData(res.data.slice(0,11));
        })
        
        // fetch("https://jsonplaceholde.typicode.com/posts")
        //     .then(res=>res.json())
        //     .then(post=>setFetch(post.slice(0,11)))
    },[])

    function createPost() {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: title,
            body: body
          })
          .then((res) => {
            console.log(res.data)
          });
    }

    function Delete(id){
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res)=>console.log(res))
    }
    
    return (<>
        <div>
            <div className="title">Data Using Axios</div>
            <div>
                {data.length>0 && data.map((entry,idx)=>{
                    return <div className="entry">
                        <span>{entry.title}</span>
                        <button onClick={()=> Delete(idx)}>Del</button>
                    </div>
                })}
            </div>
        </div>
        {/* <div>
            <div className="title">Data Using Fetch API</div>
            <div>
                {fetchData.length>0 && data.map((entry)=>{
                    return <div className="entry">{entry.title}</div>
                })}
            </div>
        </div> */}

        <div>
            <div className="title"></div>
            <div>
                <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Title"/>
                <input onChange={(e)=> setBody(e.target.value)} type="text" placeholder="Body"/>
                <button onClick={createPost}>Create Post</button>
            </div>
        </div>
    </>)
}