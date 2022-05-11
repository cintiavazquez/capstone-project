import { SingleReviewCard } from './ReviewCard.styled';
import { LocationAdress } from './ReviewCard.styled';

export default function ReviewCard(props) {
	return (
		<SingleReviewCard>
			<div>
				<h3>{props.name}</h3>
				<p>{props.rating}</p>
			</div>
			<div>
				<p>{props.comment}</p>
			</div>

			<LocationAdress>{props.location}</LocationAdress>
		</SingleReviewCard>
	);
}
