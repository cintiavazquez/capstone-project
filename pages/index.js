import dynamic from 'next/dynamic';
import useStore from '../src/useStore/useStore';
import Typography from '../src/UI/Typography';
import DivStyled from '../src/UI/DivStyled.styled';
import { useEffect } from 'react';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const ReviewList = dynamic(() => import('../src/components/ReviewList/ReviewList'), {
	ssr: false,
});
const Modal = dynamic(() => import('../src/components/Form/Modal'), {
	ssr: false,
});

const ReviewsMap = dynamic(() => import('../src/components/Map/ReviewsMap'), { ssr: false });

export default function Home() {
	//This hideEdit function sets the edit mode to false. In previous versions of my app, the edit mode was set to false only after submitting the form, but technically, a user could click on edit and then decide that they do not want to edit and go back to the homepage or to the profile page instead. In such a case, the editmode remains true. This affected the rendering of my map in the form page (since the map shows the default coordinates (around Berlin) when entering the form page to add a new review, but if one is editing an existing review, the map displays the approximate location of the review to be edited instead).
	const hideEdit = useStore(state => state.hideEdit);
	useEffect(() => {
		hideEdit();
	}, [hideEdit]);

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
				<ReviewsMap />
			</DivStyled>

			<ReviewList />
		</>
	);
}
