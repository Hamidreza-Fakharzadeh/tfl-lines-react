import React,{useState, useEffect} from 'react';
import './App.css';
import'./grid.css';
import SelectedLine from './SelectedLine';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [select, setSelect] = useState(null);
  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);
  const changeHandler = (event) => {
    setSelect(event.target.value === "Choose kind of Transport" ? null : event.target.value)
  }

  return (
    <div className="container">
      <div className="row div-row">
        <header className="lg-col-12 sm-col-12 header">Transport</header>
        <main className="lg-col-12">
          <div className="div-box lg-col-12 row">
            <select className="lg-cal-12 select-div" onChange={changeHandler} >
              <option>Choose kind of Transport</option>
              {fetchData.map((element, index) => {
              
                return <option key={index}>{element.modeName}</option>
                })
              }
            </select>
            <div>SELECTED:{select}</div>
            <SelectedLine select={select}/>
            
          </div>

        </main>
      </div>
      
    </div>
  );
}

export default App;
