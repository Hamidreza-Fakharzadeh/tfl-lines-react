import React,{useState, useEffect} from 'react';

function LineRoute (props) {
    const [route, setRoute] = useState({})
    useEffect(() => {
        if(props.lineId) {
            fetch(`https://api.tfl.gov.uk/Line/${props.lineId}/Route`)
        .then(res => res.json())
        .then(data => setRoute(data.routeSections[0]))
        console.log(route)
    }},[props.lineId])
        
        
    return(
       <div className="route lg-col-12">
            <div className='route-divs lg-col-5'>
                <p className='route-divs'>Start of Line</p>
                {route.originationName}
            </div>
            <div className='route-divs lg-col-5'>
                <p className='route-divs'>End of Line</p>
                {route.destinationName}
            </div>
        </div>
    )
}

export default LineRoute;

