import dynamic from 'next/dynamic';
import useStore from '../src/useStore/useStore';
import Typography from '../src/UI/Typography';
import DivStyled from '../src/UI/DivStyled.styled';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const ReviewList = dynamic(() => import('../src/components/ReviewList/ReviewList'), {
	ssr: false,
});
const Modal = dynamic(() => import('../src/components/Form/Modal'), {
	ssr: false,
});

const Map = dynamic(() => import('../src/components/Map/Map'), { ssr: false });

export default function Home() {
	const editmode = useStore(state => state.editmode);
	return (
		<>
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

			<DivStyled
				width="100%"
				height="40vh"
				zIndex="0"
				boxShadow="0 10px 28px rgba(0,0,0,0.25), 0 -5px 28px rgba(0,0,0,0.25);"
			>
				<Map />
			</DivStyled>

			{!editmode && <ReviewList />}
		</>
	);
}
