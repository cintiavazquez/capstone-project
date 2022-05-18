import { SingleReviewCard } from '../../UI/ReviewCard.styled';

export default function ReviewCard(props) {
	return (
		<SingleReviewCard>
			<h3>{props.name}</h3>
			<p>{props.rating}</p>
			<p>{props.comment}</p>
			<p>{props.location}</p>
		</SingleReviewCard>
	);
}
