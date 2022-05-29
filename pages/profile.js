import FavoritesList from '../src/components/ReviewList/FavoritesList';
import Div from '../src/UI/Div.styled';
import Typography from '../src/UI/Typography';

export default function Profile() {
	return (
		<Div maxWidth="500px" margin="10vh 2vh 10vh 2vh">
			<Typography
				variant="h2"
				component="h3"
				fontStyle="regular"
				fontSize="1.8rem"
				fontWeight="300"
				color="var(--text-dark)"
			>
				My favourites
			</Typography>

			<FavoritesList />
		</Div>
	);
}
