import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		modalStates: { sent: false, delete: false },
		modalMessages: {
			sent: 'Thank you for your review',
			delete: 'Do you really want to delete this review?',
		},
		modalHide: key => {
			set(state => {
				return { modalStates: { ...state.modalStates, [key]: false } };
			});
		},
		modalShow: key => {
			set(state => {
				return { modalStates: { ...state.modalStates, [key]: true } };
			});
		},
		id: [],
		setID: id => {
			set(() => {
				return { id: id };
			});
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
		deleteReview: id => {
			set(state => {
				return {
					reviews: state.reviews.filter(review => review.id !== id),
				};
			});
		},
	}))
);
export default useStore;
