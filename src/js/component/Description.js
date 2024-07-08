import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Description = () => {

    const { actions, store } = useContext(Context);

    let { type, theid } = useParams();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (type && theid && !isLoading) {
            setIsLoading(true);
            actions.getInformation(type, theid)
                .finally(() => setIsLoading(false));
        }
    }, [type, theid]);

    let renderAtributes

    if (type === "people") {

        renderAtributes = (
            <>
                <li>Gender: {store.infoCharacter?.properties?.gender}</li>
                <li>Height: {store.infoCharacter?.properties?.height}</li>
                <li>Mass: {store.infoCharacter?.properties?.mass}</li>
                <li>Skin color: {store.infoCharacter?.properties?.skin_color}</li>
                <li>Hair color: {store.infoCharacter?.properties?.hair_color}</li>
                <li>Eye color: {store.infoCharacter?.properties?.eye_color}</li>
                <li>Birth Year: {store.infoCharacter?.properties?.birth_year}</li>
            </>
        );
    }
    else if (type === "planets") {
        renderAtributes = (
            <>
                <li>Diameter: {store.infoCharacter?.properties?.diameter}</li>
                <li>Rotation Period: {store.infoCharacter?.properties?.rotation_period}</li>
                <li>Orbital Period: {store.infoCharacter?.properties?.orbital_period}</li>
                <li>Gravity: {store.infoCharacter?.properties?.gravity}</li>
                <li>Population: {store.infoCharacter?.properties?.population}</li>
                <li>Climate: {store.infoCharacter?.properties?.climate}</li>
                <li>Terrain: {store.infoCharacter?.properties?.terrain}</li>
                <li>Surface Water: {store.infoCharacter?.properties?.surface_water}</li>
            </>
        );
    }
    else if (type === "vehicles") {
        renderAtributes = (
            <>
                <li>Model: {store.infoCharacter?.properties?.model}</li>
                <li>Vehicle Class:: {store.infoCharacter?.properties?.vehicle_class}</li>
                <li>Manufacturer: {store.infoCharacter?.properties?.manufacturer}</li>
                <li>Cost In Credits: {store.infoCharacter?.properties?.cost_in_credits}</li>
                <li>Length: {store.infoCharacter?.properties?.length}</li>
                <li>Crew: {store.infoCharacter?.properties?.crew}</li>
                <li>Passengers: {store.infoCharacter?.properties?.passengers}</li>
                <li>Max Atmosphering Speed: {store.infoCharacter?.properties?.max_atmosphering_speed}</li>
                <li>Cargo Capacity: {store.infoCharacter?.properties?.cargo_capacity}</li>
                <li>Consumables: {store.infoCharacter?.properties?.consumables}</li>
            </>
        );
    }

    return (


        <div className="card mb-3" style={{ maxwidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        className="img-fluid rounded-start" 
                        src={type === "people" ? `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg` : `https://starwars-visualguide.com/assets/img/${type}/${theid}.jpg`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{store.infoCharacter?.properties?.name}</h2>
                        <p className="card-text">{store.infoCharacter?.description}</p>
                        <ul>
                            {renderAtributes}
                        </ul>
                    </div>
                </div>
                <Link to={"/"}>
                    <button className="btn btn-outline-primary">Back!</button>
                </Link>
            </div>
        </div>
    );
};
