import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import useStore from '../../useStore/useStore';
import { ListGrid } from '../../UI/ListGrid.styled';

export default function FavoritesList() {
	const reviews = useStore(state => state.reviews);
	const favorites = reviews.filter(review => review.favorite == true);
	return (
		<ListGrid>
			{favorites.map(review => {
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
						favorite={review.favorite}
					/>
				);
			})}
		</ListGrid>
	);
}
