import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => ({
	review: [
		{
			id: nanoid(),
			name: 'Vegan yoghurt',
			rating: 'good',
			comment: 'I liked this product',
			location: 'Edeka Hamburg',
		},
		{
			id: nanoid(),
			name: 'Mango ice cream',
			rating: 'bad',
			comment: "I didn't like this product",
			location: 'Eisdiele Hamburg',
		},
	],
	addReview: data => {
		set(state => {
			return {
				review: [
					...state.review,
					{
						id: nanoid(),
						name: data.name,
						rating: data.rating,
						comment: data.comment,
						location: data.location,
					},
				],
			};
		});
	},
}));
export default useStore;
