import { useEffect } from 'react';
import FavoritesList from '../src/components/ReviewList/FavoritesList';
import Typography from '../src/UI/Typography';
import useStore from '../src/useStore/useStore';
import Modal from '../src/components/Form/Modal';

export default function Profile() {
	useEffect(() => {
		useStore.getState().hideEdit();
	}, []);

	useEffect(() => {
		useStore.getState().fetchReviews();
	}, []);

	return (
		<>
			<Modal />

			<Typography
				variant="h2"
				component="h3"
				fontSize="2.2rem"
				fontWeight="200"
				textAlign="center"
				color="var(--text-dark)"
			>
				My favourites
			</Typography>

			<FavoritesList />
		</>
	);
}
