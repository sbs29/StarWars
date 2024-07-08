import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { actions, store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-black bg-gradient mb-3">
			<Link to="/">
			<img className="img-thumbnail ms-5" style={{width:"200px"}} src="https://www.tictacsoluciones.com/wp-content/uploads/2012/07/star-wars.png" />
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropstart me-5">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.listFavorites.length > 0 ? (
							store.listFavorites.map((item, index) => (
								<li className="ms-3" key={index}>
									{item}
									<i onClick={() => actions.deleteFavoritos(item)} className="fa fa-trash"></i>
								</li>
							))
						) : (
							<li className="ms-3">No favorites added</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};