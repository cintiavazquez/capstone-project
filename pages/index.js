import getReviews from '../src/services/get-reviews';
import ReviewList from '../src/components/ReviewList/ReviewList';
import { ListGrid } from '../src/components/ReviewList/ListGrid.styled';
import Form from '../src/components/Form/Form';

export function getStaticProps() {
	const reviews = getReviews();

	return {
		props: {
			reviews,
		},
	};
}

export default function Home({ reviews }) {
	return (
		<ListGrid>
			<ReviewList reviewData={reviews} />
			<Form />
		</ListGrid>
	);
}
