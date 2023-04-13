import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

const StarWarsRoutes = (props) => {
    const [starWarsData, setStarWarsData] = useState(props.data);
    const [resource, setResource] = useState(props.resource);
    const [idToGet, setIdToGet] = useState(props.idToGet)
    const navigate = useNavigate();

    //these are the routes
    const People = (props) => {
        const {name, height, mass, hairColor, skinColor} = props;
        return (
            <div>
                <h1>{name}</h1>
                <h3>Height: {height}</h3>
                <h3>Mass: {mass}</h3>
                <h3>Hair Color: {hairColor}</h3>
                <h3>Skin Color: {skinColor}</h3>
            </div>

        );
    }

    useEffect(() => {
        navigate(`/${resource}/${idToGet}`);
    }, [resource, idToGet, starWarsData, navigate])



    return (
        <div>
            <Routes>
                {/* <Route path="/films/:id" element={<Films/>}/> */}
                <Route path="/people/:id" element={<People />}/>
                {/* <Route path="/planets/:id" element={<Planets/>}/>
                <Route path="/species/:id" element={<Species/>}/>
                <Route path="/starships/:id" element={<Starships/>}/>
                <Route path="/vehicles/:id" element={<Vehicles/>}/> */}
            </Routes>
        </div>
    )
}

export default StarWarsRoutes;