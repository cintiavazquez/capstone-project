import { SingleReviewCard } from './ReviewCard.styled';
import { LocationAdress } from './ReviewCard.styled';

export default function ReviewCard(props) {
	return (
		<SingleReviewCard>
			<h3>{props.name}</h3>
			<p>{props.rating}</p>
			<p>{props.comment}</p>
			<LocationAdress>{props.location}</LocationAdress>
		</SingleReviewCard>
	);
}
