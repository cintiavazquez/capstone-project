import DivStyled from '../../UI/DivStyled.styled';
import DivFlex from '../../UI/DivFlex.styled';
import Typography from '../../UI/Typography';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
	return (
		<DivStyled maxWidth="500px" margin="20px auto 20px auto" LayoutQuery="media-query">
			<DivFlex
				background="var(--lightest-color)"
				borderRadius="50px"
				border="4px solid var(--dark-lilac)"
				height="5rem"
				width="5rem"
				alignItems="center"
				justifyContent="center"
				position="absolute"
				zIndex="1"
				LogoQuery="media-query"
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
		</DivStyled>
	);
}
