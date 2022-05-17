import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => ({
	review: [
		{
			id: nanoid(),
			name: 'testproduct',
			rating: 'good',
			comment: 'I liked this product',
			location: 'Edeka Hamburg',
		},
		{
			id: nanoid(),
			name: 'testproduct2',
			rating: 'bad',
			comment: "I didn't like this product",
			location: 'Eisdiele X Hamburg',
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
