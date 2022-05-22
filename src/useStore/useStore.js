import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		modalStates: { sent: false, delete: false, updated: false },
		modalMessages: {
			sent: 'Thank you for your review',
			delete: 'Do you really want to delete this review?',
			updated: 'Your review has been updated',
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
		editmode: false,
		showEdit: () => {
			set({ editmode: true });
		},
		hideEdit: () => {
			set({ editmode: false });
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
				rating: 'Good',
				comment: 'I liked this product',
				location: 'Edeka Hamburg',
			},
			{
				id: nanoid(),
				name: 'Mango ice cream',
				rating: 'Bad',
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
		editReview: (data, id) => {
			set(state => {
				return {
					reviews: state.reviews.map(review =>
						review.id === id
							? {
									...review,
									name: data.name,
									rating: data.rating,
									comment: data.comment,
									location: data.location,
							  }
							: review
					),
				};
			});
		},
	}))
);
export default useStore;
