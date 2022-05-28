import FavoritesList from '../src/components/ReviewList/FavoritesList';
import Div from '../src/UI/Div.styled';

export default function Profile() {
	return (
		<Div maxWidth="500px" margin="10vh auto 10vh auto">
			<h2>My favourites</h2>
			<FavoritesList />
		</Div>
	);
}
