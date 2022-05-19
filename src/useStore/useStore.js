import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		modalState: false,
		modalHide: () => {
			set({ modalState: false });
		},
		modalShow: () => {
			set({ modalState: true });
		},
		reviews: [
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
					reviews: [
						...state.reviews,
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
	}))
);
export default useStore;
