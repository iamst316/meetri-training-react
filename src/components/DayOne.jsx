import Parent from './Parent';
import Child from './Child'
import { useNavigate } from 'react-router-dom';

export default function(){
    const navigate = useNavigate();

    function Navigate(){
        navigate("/2");
    }

    return (<div>
        <div className="main-title title">Day One</div>
        <Parent />
        {/* <Child /> */}
        <div><button onClick={Navigate}>Click Here for Day Two</button></div>
    </div>)
}