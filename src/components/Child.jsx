

export default function(props){
    const {id,charges} = props.entry;

    
    return (<div onClick={()=> props.handleCallback(props.entry)} className="card">
        <div>I'm a child component</div>
        <div className="id">Booking ID: {id}</div>
        <div className="charges">Charges: &#8377;{charges}</div>
        {/* {props.handleCallback()} */}
    </div>)
}