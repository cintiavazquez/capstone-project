import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import FavoritesList from '../src/components/ReviewList/FavoritesList';
import Typography from '../src/UI/Typography';
import useStore from '../src/useStore/useStore';

const Modal = dynamic(() => import('../src/components/Form/Modal'), {
	ssr: false,
});

export default function Profile() {
	useEffect(() => {
		useStore.getState().hideEdit();
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
