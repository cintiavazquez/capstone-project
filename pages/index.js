import dynamic from 'next/dynamic';
import useStore from '../src/useStore/useStore';
import Div from '../src/UI/Div.styled';
import Typography from '../src/UI/Typography';
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
		<Div maxWidth="500px" margin="10vh 2vh 10vh 2vh">
			<Modal />
			<Typography
				variant="h1"
				component="h1"
				fontStyle="italic"
				fontSize="1.6rem"
				fontWeight="300"
				color="var(--medium-green)"
			>
				Rated vegan products
			</Typography>
			{!editmode && <ReviewList />}
		</Div>
	);
}
