import ReviewCard from '../ReviewCard/ReviewCard';
import useStore from '../../useStore/useStore';

export default function ReviewList() {
	const reviews = useStore(state => state.reviews);
	return reviews.map(review => {
		return (
			<ReviewCard
				key={review.id}
				name={review.name}
				rating={review.rating}
				location={review.location}
				comment={review.comment}
			/>
		);
	});
}
