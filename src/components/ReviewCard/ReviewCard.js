import { SingleReviewCard } from '../../UI/ReviewCard.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';

export default function ReviewCard(props) {
	const modalShow = useStore(state => state.modalShow);
	const setID = useStore(state => state.setID);

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
					setID(props.id);
					console.log('I am an ID' + props.id);
					modalShow('delete');
				}}
			>
				Delete
			</Button>
		</SingleReviewCard>
	);
}
