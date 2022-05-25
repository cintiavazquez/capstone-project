import { SingleReviewCard } from '../../UI/ReviewCard.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ImageWrapper } from '../../UI/ImageWrapper';

export default function ReviewCard(props) {
	const setModalState = useStore(state => state.setModalState);
	const setID = useStore(state => state.setID);
	const showEdit = useStore(state => state.showEdit);
	const router = useRouter();

	return (
		<SingleReviewCard>
			<h3>{props.name}</h3>
			<ImageWrapper width="100px" height="100px">
				<Image src={props.image.url} alt={props.altText} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<p>{props.rating}</p>
			<p>{props.comment}</p>
			<p>{props.location}</p>
			<Button
				type="button"
				variant="delete"
				onClick={() => {
					setID(props.id);
					setModalState('delete');
				}}
			>
				Delete
			</Button>
			<Button
				type="button"
				variant="edit"
				onClick={() => {
					setID(props.id);
					showEdit();
					router.push('/post');
				}}
			>
				Edit
			</Button>
		</SingleReviewCard>
	);
}
