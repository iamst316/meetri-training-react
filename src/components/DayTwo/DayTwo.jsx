import { Outlet, Link, useNavigate } from "react-router-dom";

export default function(){
    const navigate = useNavigate();

    function Navigate(){
        navigate("/");
    }

    return(<>
        <div>
            <div><Link to="/2">Hooks</Link></div>
            <div><Link to="/2/counter">Counter Component</Link></div>
            <div><Link to="/2/gallery-redux">Gallery Component</Link></div>
            <div><Link to="/2/stopwatch">Stopwatch Component</Link></div>

            <div><button onClick={Navigate}>Simon Go Back</button></div>
        </div>
        <Outlet />
    </>)
}