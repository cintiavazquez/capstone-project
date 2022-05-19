import { SingleReviewCard } from '../../UI/ReviewCard.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';

export default function ReviewCard(props) {
	const deleteReview = useStore(state => state.deleteReview);
	return (
		<SingleReviewCard>
			<h3>{props.name}</h3>
			<p>{props.rating}</p>
			<p>{props.comment}</p>
			<p>{props.location}</p>
			<Button
				type="button"
				variant="delete"
				onClick={() => {
					deleteReview(props.id);
				}}
			>
				Delete
			</Button>
		</SingleReviewCard>
	);
}
