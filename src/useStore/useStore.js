import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		modalState: null,
		modalMessages: {
			sent: 'Thank you for your review',
			delete: 'Do you really want to delete this review?',
			updated: 'Your review has been updated',
		},
		setModalState: modalState => {
			set({ modalState });
		},
		editmode: false,
		showEdit: () => {
			set({ editmode: true });
		},
		hideEdit: () => {
			set({ editmode: false });
		},
		smileySelect: '',
		select: key => {
			set(() => {
				return { smileySelect: key };
			});
		},
		id: [],
		setID: id => {
			set(() => {
				return { id: id };
			});
		},
		favoriteTrue: id => {
			set(state => ({
				reviews: state.reviews.map(review =>
					review.id === id ? { ...review, favorite: true } : review
				),
			}));
		},
		favoriteFalse: id => {
			set(state => ({
				reviews: state.reviews.map(review =>
					review.id === id ? { ...review, favorite: false } : review
				),
			}));
		},
		positions: {},
		updatePositions: (latitude, longitude, geoname) => {
			set({ positions: { lat: latitude, long: longitude, geoname: geoname } });
		},
		center: {},
		setCenter(latlng) {
			set(() => {
				return { center: latlng };
			});
		},
		locEdit: {},
		setLocEdit: (positionslat, positionslong) => {
			set(() => {
				return { locEdit: { lat: positionslat, long: positionslong } };
			});
		},
		reviews: [
			{
				id: nanoid(),
				name: 'Vegan yoghurt',
				rating: 'Good',
				comment: 'I liked this product',
				location: { lat: 53.5507957, long: 9.9700752, geoname: 'Edeka Hamburg' },
				image: {
					url: 'https://images.unsplash.com/photo-1584278433313-562a1bc0aa6b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746',
				},
				altText: 'vegan yoghurt',
				favorite: true,
			},
			{
				id: nanoid(),
				name: 'Mango ice cream',
				rating: 'Bad',
				comment: "I didn't like this product",
				location: { lat: 52.5170365, long: 13.3888599, geoname: 'Eisdiele in Berlin' },
				image: {
					url: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
				},
				altText: 'vegan mango ice cream',
				favorite: false,
			},
		],
		addReview: (data, positionslat, positionslong, geoname) => {
			set(state => {
				return {
					reviews: [
						...state.reviews,
						{
							id: nanoid(),
							name: data.name,
							rating: data.rating,
							comment: data.comment,
							location: { lat: positionslat, long: positionslong, geoname: geoname },
							image: data.image,
							altText: data.name,
							favorite: false,
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
		editReview: (data, id, positionslat, positionslong, geoname) => {
			set(state => {
				return {
					reviews: state.reviews.map(review =>
						review.id === id
							? {
									...review,
									id: data.id,
									name: data.name,
									rating: data.rating,
									comment: data.comment,
									location: {
										lat: positionslat,
										long: positionslong,
										geoname: geoname,
									},
									image: data.image,
									altText: data.name,
									favorite: data.favorite,
							  }
							: review
					),
				};
			});
		},
	}))
);
export default useStore;
