import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Description = () => {

    const { actions, store } = useContext(Context);

    let { type, theid } = useParams();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        actions.restartValues(type);
        if (type && theid && !isLoading) {
            setIsLoading(true);
            actions.getInformation(type, theid)
                .finally(() => setIsLoading(false));
        }
    }, [type, theid]);

    function OnImageError(e) {
        e.target.src = "https://www.tictacsoluciones.com/wp-content/uploads/2012/07/star-wars.png"
    }

    let renderAtributes

    if (type === "people") {

        renderAtributes = (
            <>
                <li>Gender: {store.infoDetails?.properties?.gender}</li>
                <li>Height: {store.infoDetails?.properties?.height}</li>
                <li>Mass: {store.infoDetails?.properties?.mass}</li>
                <li>Skin color: {store.infoDetails?.properties?.skin_color}</li>
                <li>Hair color: {store.infoDetails?.properties?.hair_color}</li>
                <li>Eye color: {store.infoDetails?.properties?.eye_color}</li>
                <li>Birth Year: {store.infoDetails?.properties?.birth_year}</li>
            </>
        );
    }
    else if (type === "planets") {
        renderAtributes = (
            <>
                <li>Diameter: {store.infoDetails?.properties?.diameter}</li>
                <li>Rotation Period: {store.infoDetails?.properties?.rotation_period}</li>
                <li>Orbital Period: {store.infoDetails?.properties?.orbital_period}</li>
                <li>Gravity: {store.infoDetails?.properties?.gravity}</li>
                <li>Population: {store.infoDetails?.properties?.population}</li>
                <li>Climate: {store.infoDetails?.properties?.climate}</li>
                <li>Terrain: {store.infoDetails?.properties?.terrain}</li>
                <li>Surface Water: {store.infoDetails?.properties?.surface_water}</li>
            </>
        );
    }
    else if (type === "vehicles") {
        renderAtributes = (
            <>
                <li>Model: {store.infoDetails?.properties?.model}</li>
                <li>Vehicle Class:: {store.infoDetails?.properties?.vehicle_class}</li>
                <li>Manufacturer: {store.infoDetails?.properties?.manufacturer}</li>
                <li>Cost In Credits: {store.infoDetails?.properties?.cost_in_credits}</li>
                <li>Length: {store.infoDetails?.properties?.length}</li>
                <li>Crew: {store.infoDetails?.properties?.crew}</li>
                <li>Passengers: {store.infoDetails?.properties?.passengers}</li>
                <li>Max Atmosphering Speed: {store.infoDetails?.properties?.max_atmosphering_speed}</li>
                <li>Cargo Capacity: {store.infoDetails?.properties?.cargo_capacity}</li>
                <li>Consumables: {store.infoDetails?.properties?.consumables}</li>
            </>
        );
    }

    return (
        <div className="card mb-3" style={{ maxwidth: "600px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        className="img-fluid rounded-start" 
                        onError={OnImageError} src={type === "people" ? `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg` : `https://starwars-visualguide.com/assets/img/${type}/${theid}.jpg`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{store.infoDetails?.properties?.name}</h2>
                        <p className="card-text">{store.infoDetails?.description}</p>
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
