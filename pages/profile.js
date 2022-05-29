import FavoritesList from '../src/components/ReviewList/FavoritesList';
import Div from '../src/UI/Div.styled';
import DivFlex from '../src/UI/DivFlex.styled';
import Typography from '../src/UI/Typography';

export default function Profile() {
	return (
		<Div maxWidth="500px" margin="5vh 2vh 5vh 2vh">
			<DivFlex
				borderRadius="50px"
				border="4px solid var(--dark-lilac)"
				height="5rem"
				width="5rem"
				alignItems="center"
				justifyContent="center"
			>
				<Typography
					className="logo"
					variant="p"
					component="p"
					fontFamily="Pacifico"
					fontSize="2.5rem"
					color="var(--dark-lilac)"
				>
					V
				</Typography>
			</DivFlex>
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
		</Div>
	);
}
