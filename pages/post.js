import Form from '../src/components/Form/Form';
import Modal from '../src/components/Form/Modal';
import Div from '../src/UI/Div.styled';
import DivFlex from '../src/UI/DivFlex.styled';
import Typography from '../src/UI/Typography';
export default function Post() {
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
			<Modal />
			<Form />
		</Div>
	);
}
