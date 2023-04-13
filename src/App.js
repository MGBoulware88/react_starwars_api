import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';

function App() {

  const [starWarsData, setStarWarsData] = useState({});
  const [resource, setResource] = useState("");
  const [idToGet, setIdToGet] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const URL = "https://swapi.dev/api/"
  //this fetches the data based on form inputs
  async function getStarWarsDataById(e) {
    e.preventDefault();
    axios.get(`${URL}/${resource}/${idToGet}`)
      .then(results => {
        return setStarWarsData(results.data);
      }).catch(err => {
        setIsError(true);
        console.error(err);
        navigate("/these_are_not_the_droids_youre_looking_for");
      })

      if (!isError) {
        navigate(`${resource}/${idToGet}`);
      }
    // const results = await axios.get(`${URL}/${resource}/${idToGet}`);
    // const parsedData = results.data;
    // setStarWarsData(parsedData);
    // if (starWarsData) {
    //   console.log("we got something");
    //   navigate(`${resource}/${idToGet}`);
    // } else {
    //   console.error("whoops");
    //   navigate("/these_are_not_the_droids_youre_looking_for");
    // }
    // console.log(results);
  }

  //these are the routes
  const People = () => {
    return (
      <div>
        <h1>{starWarsData.name}</h1>
        <h3>Height: {starWarsData.height}</h3>
        <h3>Mass: {starWarsData.mass}</h3>
        <h3>Hair Color: {starWarsData.hair_color}</h3>
        <h3>Skin Color: {starWarsData.skin_color}</h3>
      </div>

    );
  }

  const Planets = () => {
    return (
      <div>
        <h1>{starWarsData.name}</h1>
        <h3>Climate: {starWarsData.climate}</h3>
        <h3>Terrain: {starWarsData.terrain}</h3>
        <h3>Diameter: {starWarsData.diameter}</h3>
        <h3>Population: {starWarsData.population}</h3>
      </div>

    );
  }

  //error route
  const NoDroidsHere = () => {
    return <img src="https://i0.kym-cdn.com/photos/images/facebook/001/005/935/ef1.jpg" alt="obi-wan-not-droids"></img>
    

  }

  //onChange function for inputs
  function updateResource(e) {
    return setResource(e.target.value);
  }

  function updateIdToGet(e) {
    return setIdToGet(e.target.value);
  }


  return (
    <div className="App">
      <header className="App">
        <form onSubmit={e => getStarWarsDataById(e)}>
          <label>Search for: </label>
          <select onChange={e => updateResource(e)} value={resource}>
            <option>. . .</option>
            <option>films</option>
            <option>people</option>
            <option>planets</option>
            <option>species</option>
            <option>starships</option>
            <option>vehicles</option>
          </select>
          <label>ID: </label>
          <input type="number" onChange={e => updateIdToGet(e)} value={idToGet}></input>
          <button>Search</button>
        </form>
        <Routes>
          {/* <Route path="/films/:id" element={<Films/>}/> */}
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planets />} />
          {/* <Route path="/species/:id" element={<Species/>}/>
          <Route path="/starships/:id" element={<Starships/>}/>
          <Route path="/vehicles/:id" element={<Vehicles/>}/> */}
          <Route path="/these_are_not_the_droids_youre_looking_for" element={<NoDroidsHere />} />
        </Routes>

      </header>
      {/* <StarWarsRoutes name={starWarsData.name} height={starWarsData.height} mass={starWarsData.mass} hairColor={starWarsData.hairColor} skinColor={starWarsData.skinColor}></StarWarsRoutes> */}
    </div>
  );
}

export default App;
