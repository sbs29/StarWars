const getState = ({ getStore, getActions, setStore }) => {

	const ApiUrl = `https:///www.swapi.tech/api/`

	const fetchData = async (endpoint, storeKey) => {
		try {
			const response = await fetch(`${ApiUrl}${endpoint}/`);
			const data = await response.json();
			//console.log(data);

			const imageEndpoint = endpoint === "people" ? "characters" : endpoint;
	
			const resultsWithImages = data.results.map(obj => ({
				...obj,
				imageUrl: `https://starwars-visualguide.com/assets/img/${imageEndpoint}/${obj.uid}.jpg`
			}));
		   
			setStore({ [storeKey]: resultsWithImages });
		} catch (error) {
			console.error(`Error fetch ${storeKey}:`, error);
		}
	}
	const fetchInformation = async (type, id) => {
		try {
			console.log(`${ApiUrl}${type}/${id}`);
			const response = await fetch(`${ApiUrl}${type}/${id}`);
			const data = await response.json();
			setStore({ infoCharacter: data.result });
		} catch (error) {
			console.error(`Error fetch:`, error);
		}
	}

	return {
		store: {
			listPeople: [],
			listVehicles: [],
			listPlanets: [],
			infoCharacter: [],
			listFavorites: []
		},
		actions: {
			getPeople: () => fetchData("people","listPeople"),
			getVehicles: () => fetchData("vehicles","listVehicles"),
			getPlanets: () => fetchData("planets","listPlanets"),
			getInformation: (type, id) => fetchInformation(type, id),
			addFavorites: (name) => {
				setStore({listFavorites:getStore().listFavorites.concat(name)});
			},
			deleteFavoritos: (elemento) => {
				const store = getStore();
				const updatedFavoritos = store.listFavorites.filter((fav) => fav !== elemento);
				setStore({ listFavorites: updatedFavoritos });
			},

		}
	};
};

export default getState;
