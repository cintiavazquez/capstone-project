import ReviewCard from '../ReviewCard/ReviewCard';
import useStore from '../../useStore/useStore';
import Form from '../Form/Form';

export default function ReviewList() {
	const editmode = useStore(state => state.editmode);
	return editmode ? <EditModeOn /> : <EditModeOff />;
}

function EditModeOff() {
	const reviews = useStore(state => state.reviews);
	return reviews.map(review => {
		return (
			<ReviewCard
				key={review.id}
				id={review.id}
				name={review.name}
				rating={review.rating}
				location={review.location}
				comment={review.comment}
			/>
		);
	});
}
function EditModeOn() {
	return <Form />;
}
