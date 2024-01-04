import { Outlet, Link } from "react-router-dom";

export default function(){

    return(<>
        <div>
            <div><Link to="/">Day One</Link></div>
            <div><Link to="/2">Day Two</Link></div>
            <div><Link to="/3">Day Three</Link></div>

        </div>
        <Outlet />
    </>)
}