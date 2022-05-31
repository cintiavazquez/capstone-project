import Div from '../../UI/Div.styled';
import DivFlex from '../../UI/DivFlex.styled';
import Typography from '../../UI/Typography';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
	return (
		<Div maxWidth="500px" margin="5vh auto 5vh auto">
			<DivFlex
				background="white"
				borderRadius="50px"
				border="4px solid var(--dark-lilac)"
				height="5rem"
				width="5rem"
				alignItems="center"
				justifyContent="center"
				margin="0 0 0 2vh"
				position="absolute"
				zIndex="1"
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
			{children}
			<Navbar />
		</Div>
	);
}
