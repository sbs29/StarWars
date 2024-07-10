const getState = ({ getStore, getActions, setStore }) => {

	const ApiUrl = `https:///www.swapi.tech/api/`

	const fetchData = async (endpoint, storeKey) => {
		try {
			const response = await fetch(`${ApiUrl}${endpoint}/`);
			const data = await response.json();
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
			setStore({ infoDetails: data.result });
		} catch (error) {
			console.error(`Error fetch:`, error);
		}
	}

	return {
		store: {
			listPeople: [],
			listVehicles: [],
			listPlanets: [],
			infoDetails: [],
			listFavorites: []
		},
		actions: {
			getPeople: () => fetchData("people","listPeople"),
			getVehicles: () => fetchData("vehicles","listVehicles"),
			getPlanets: () => fetchData("planets","listPlanets"),
			getInformation: (type, id) => fetchInformation(type, id),
			addFavorites: (name) => {
				if (!getStore().listFavorites.includes(name)) {
					setStore({listFavorites:getStore().listFavorites.concat(name)});
				}
			},
			deleteFavoritos: (element) => {
				const store = getStore();
				const favorites = store.listFavorites.filter((item) => item !== element);
				setStore({ listFavorites: favorites });
			},
			restartValues: () => {
				setStore({infoDetails:undefined})
			}
		}
	};
};

export default getState;
