import React,{useEffect, useState} from 'react';


const SelectedLine = (props) => {
    const [lines, setLines] = useState([]);
    const [lineId, setLineId] = useState(null);
    const [err, setErr] = useState(false);
    const [loaded, setLoaded] = useState(false);
     useEffect(() => {
         if(props.select) {
         setLoaded(false)
        fetch(`https://api.tfl.gov.uk/Line/Mode/${props.select}`)
        .then((res) => res.json())
        .then((data) => setLines(data))
        .then(() =>{setLoaded(true)})
        .catch((err) => setErr(err));
         
     }}, [props.select]);
    
      
    

    const changeHandler = (event) => {
        setLineId(event.target.value === "Choose kind of Transport" ? "Choose Your Line": event.target.value)
   }    

    return(
        <div>
            <select onChange={changeHandler}>{console.log(lines)}
                <option> Choose Your Line</option>
                {lines.map((line, index) => {
                    
                return <option key={index}>{line.id}</option>
                    })
                }
            </select>
            {!loaded ? <h1>loading</h1> : err ? <h3>404</h3> : ""}
        </div>
        
    )
    
}
export default SelectedLine;