import ReviewCard from '../ReviewCard/ReviewCard';
import useStore from '../../useStore/useStore';
import Form from '../Form/Form';
import ListGrid from '../../UI/ListGrid.styled';

export default function ReviewList() {
	const editmode = useStore(state => state.editmode);
	return editmode ? <EditModeOn /> : <EditModeOff />;
}

function EditModeOff() {
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
					/>
				);
			})}
		</ListGrid>
	);
}
function EditModeOn() {
	return <Form />;
}
