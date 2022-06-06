import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(
		set => ({
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

			locationEdit: [],
			setLocationEdit: (positionslat, positionslong) => {
				set(() => {
					return { locationEdit: [positionslat, positionslong] };
				});
			},
			reviews: [],
			fetchReviews: async () => {
				try {
					const response = await fetch('/api/reviews');
					const data = await response.json();
					set({ reviews: data });
				} catch (error) {
					console.error(`Upps das war ein Fehler: ${error}`);
				}
			},
			zoomReview: [
				{
					location: {
						lat: 52.5,
						long: 13.4,
						geoname: 'testname',
					},
				},
			],
			zoomTo: id => {
				set(state => ({
					zoomReview: state.reviews.filter(review => review.id === id),
				}));
			},
			routedZoom: false,
			routedZoomOn: () => {
				set({ routedZoom: true });
			},
			routedZoomOff: () => {
				set({ routedZoom: false });
			},
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
								location: {
									lat: positionslat,
									long: positionslong,
									geoname: geoname,
								},
								image: data.image,
								altText: data.name,
								favorite: false,
							},
						],
					};
				});
			},
			deleteReview: async id => {
				try {
					const response = await fetch('/api/review/' + id, {
						method: 'DELETE',
					});
					set(state => {
						return {
							reviews: state.reviews.filter(review => review.id !== id),
						};
					});
					console.log(await response.json());
				} catch (error) {
					console.error(`Upps das war ein Fehler: ${error}`);
				}
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
		}),
		{ name: 'VGo' }
	)
);
export default useStore;
