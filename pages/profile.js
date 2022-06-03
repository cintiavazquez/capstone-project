import { useEffect } from 'react';
import FavoritesList from '../src/components/ReviewList/FavoritesList';
import Typography from '../src/UI/Typography';
import useStore from '../src/useStore/useStore';

export default function Profile() {
	useEffect(() => {
		useStore.getState().hideEdit();
	}, []);

	return (
		<>
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
