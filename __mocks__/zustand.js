import actualCreate from 'zustand';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

const reviews = [
	{
		id: 1,
		name: 'Vegan yoghurt',
		rating: 'Good',
		comment:
			'Loved this vegan alternative to sour cream, even though it’s a bit pricey for daily use',
		location: { lat: 53.5507957, long: 9.9700752, geoname: 'Edeka Hamburg' },
		image: {
			url: 'https://images.unsplash.com/photo-1584278433313-562a1bc0aa6b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746',
		},
		altText: 'Vegan yoghurt',
		favorite: true,
		zoom: false,
	},
	{
		id: 2,
		name: 'Mango ice cream',
		rating: 'Okay',
		comment: 'Quite good vegan ice cream',
		location: {
			lat: 53.5557646,
			long: 10.0006147,
			geoname: 'Ballindamm, Altstadt, Hamburg-Mitte, Hamburg, 20095, Germany',
		},
		image: {
			url: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
		},
		altText: 'Mango ice cream',
		favorite: true,
		zoom: false,
	},
];

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = createState => {
	const store = actualCreate(createState);
	const initialState = store.getState();
	initialState.reviews = reviews;
	storeResetFns.add(() => store.setState(initialState, true));
	return store;
};

// Reset all stores after each test run
afterEach(() => {
	act(() => storeResetFns.forEach(resetFn => resetFn()));
});

export default create;
