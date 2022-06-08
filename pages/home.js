import dynamic from 'next/dynamic';
import useStore from '../src/useStore/useStore';
import Typography from '../src/UI/Typography';
import DivStyled from '../src/UI/DivStyled.styled';
import { useEffect } from 'react';
import ReviewList from '../src/components/ReviewList/ReviewList';
import Modal from '../src/components/Form/Modal';

const ReviewsMap = dynamic(() => import('../src/components/Map/ReviewsMap'), { ssr: false });

export default function Home() {
	//This hideEdit function sets the edit mode to false. In previous versions of my app, the edit mode was set to false only after submitting the form, but technically, a user could click on edit and then decide that they do not want to edit and go back to the homepage or to the profile page instead. In such a case, the editmode remains true. This affected the rendering of my map in the form page (since the map shows the default coordinates (around Berlin) when entering the form page to add a new review, but if one is editing an existing review, the map displays the approximate location of the review to be edited instead).

	useEffect(() => {
		useStore.getState().hideEdit();
	}, []);

	useEffect(() => {
		useStore.getState().fetchReviews();
	}, []);

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
