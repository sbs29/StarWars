import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {

	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.getPeople()
		actions.getPlanets()
		actions.getVehicles()
	}, [])

	return (

		<div className="container-fluid mt-5 d-flex flex-column">
			<h1 className="text-info" >Characters</h1>
			<ul className="d-flex list-group flex-row overflow-auto mb-5 ">
				{store.listPeople.map((item) => (
					<li className="list-group p-5" key={item.uid}>
						<Card 
							item={item}
							type="people" />
					</li>
				))}
			</ul>
			<h1 className="text-info" >Planets</h1>
			<ul className="d-flex list-group  flex-row overflow-auto mb-5 ">
				{store.listPlanets.map((item) => (
					<li className="list-group p-5" key={item.uid}>
						<Card 
							item={item}
							type="planets" />
					</li>
				))}
			</ul>
			<h1 className="text-info" >Vehicles</h1>
			<ul className="d-flex list-group flex-row overflow-auto mb-5 ">
				{store.listVehicles.map((item) => (
					<li className="list-group p-5" key={item.uid}>
						<Card 
							item={item}
							type="vehicles" />
					</li>
				))}
			</ul>
		</div>
	);
}
