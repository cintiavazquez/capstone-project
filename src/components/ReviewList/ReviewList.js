import ReviewCard from '../ReviewCard/ReviewCard';

export default function ReviewList({ reviewData }) {
	return reviewData.map(review => {
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
