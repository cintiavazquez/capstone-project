import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import useStore from '../../useStore/useStore';
import { ListGrid } from '../../UI/ListGrid.styled';

export default function ReviewList() {
	const reviews = useStore(state => state.reviews);
	return (
		<ListGrid>
			{reviews.map(review => {
				return (
					<ReviewCard
						key={review.id}
						id={review.id}
						name={review.name}
						rating={review.rating}
						location={review.location}
						comment={review.comment}
						image={review.image}
						altText={review.altText}
					/>
				);
			})}
		</ListGrid>
	);
}
