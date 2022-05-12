import ReviewCard from '../src/components/ReviewCard';
import getReviews from '../src/services/get-reviews';

export default function Home() {
	const reviews = getReviews();
	return (
		<ReviewCard
			name={reviews[2].name}
			comment={reviews[2].comment}
			rating={reviews[2].rating}
			location={reviews[2].location}
		/>
	);
}
