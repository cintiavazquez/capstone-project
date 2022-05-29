import dynamic from 'next/dynamic';
import useStore from '../src/useStore/useStore';
import Div from '../src/UI/Div.styled';
import Typography from '../src/UI/Typography';
import DivFlex from '../src/UI/DivFlex.styled';
//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const ReviewList = dynamic(() => import('../src/components/ReviewList/ReviewList'), {
	ssr: false,
});
const Modal = dynamic(() => import('../src/components/Form/Modal'), {
	ssr: false,
});

export default function Home() {
	const editmode = useStore(state => state.editmode);
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
			<Typography
				variant="h1"
				component="h1"
				fontSize="2.2rem"
				fontWeight="200"
				textAlign="center"
				color="var(--text-medium)"
			>
				Rated vegan products
			</Typography>
			{!editmode && <ReviewList />}
		</Div>
	);
}
