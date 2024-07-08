import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {

    //console.log(props.item);
    const { store, actions } = useContext(Context);

    function OnImageError(e) {
        e.target.src = "https://www.tictacsoluciones.com/wp-content/uploads/2012/07/star-wars.png"
    }

    console.log(props.item);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img onError={OnImageError} src={props.item.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p>{props.item.description}</p>
                <Link to={`${props.type}/${props.item.uid}`}>
                    <button className="btn btn-outline-info">Learn more!</button>
                </Link>
                <button 
                type="button" 
                className={store.listFavorites.includes(props.item.name) ? `btn btn-danger` : 'btn btn-outline-info'} data-bs-toggle="button" onClick={(e) => actions.addFavorites(props.item.name)} >
                    <i className=" fa fa-regular fa-heart"></i>
                </button>
            </div>
        </div>
    );
}