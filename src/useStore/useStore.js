import create from 'zustand';
const useStore = create(set => ({
	review: [
		{
			name: 'testproduct',
			id: 1,
			rating: 'good',
			comment: 'I liked this product',
			location: 'Edeka Hamburg',
		},
		{
			name: 'testproduct2',
			id: 2,
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
						id: data.name,
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
