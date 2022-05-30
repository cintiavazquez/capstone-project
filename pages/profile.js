import FavoritesList from '../src/components/ReviewList/FavoritesList';
import Typography from '../src/UI/Typography';

export default function Profile() {
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
