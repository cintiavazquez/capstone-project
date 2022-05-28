import { SingleReviewCard } from '../../UI/ReviewCard.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ImageWrapper } from '../../UI/ImageWrapper';
import SVGIcon from '../../UI/SVGIcon';
import DivFlex from '../../UI/DivFlex.styled';

export default function ReviewCard(props) {
	const setModalState = useStore(state => state.setModalState);
	const setID = useStore(state => state.setID);
	const showEdit = useStore(state => state.showEdit);
	const contentDisplay = useStore(state => state.contentDisplay);
	const showContent = useStore(state => state.showContent);
	const hideContent = useStore(state => state.hideContent);
	const favoriteTrue = useStore(state => state.favoriteTrue);
	const favoriteFalse = useStore(state => state.favoriteFalse);
	const router = useRouter();

	return (
		<SingleReviewCard>
			<ImageWrapper width="140px" height="140px" borderRadius="10%">
				<Image src={props.image.url} alt={props.altText} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<DivFlex width="55%">
				<h3>{props.name}</h3>
				<p>{props.rating}</p>
				<DivFlex>
					<Button
						type="button"
						variant="invisible"
						onClick={() => {
							contentDisplay ? hideContent() : showContent();
						}}
					>
						{contentDisplay ? (
							<DivFlex flexWrap="wrap">
								<p>Show less</p>
								<SVGIcon variant="chevron_up" color="grey" />
							</DivFlex>
						) : (
							<DivFlex>
								<p>Read review</p>
								<SVGIcon variant="chevron_down" color="grey" />
							</DivFlex>
						)}
					</Button>
					{contentDisplay && <p>{props.comment}</p>}
				</DivFlex>

				<p>{props.location}</p>
				<Button
					type="button"
					variant="favorite"
					onClick={() => {
						props.favorite ? favoriteFalse(props.id) : favoriteTrue(props.id);
					}}
				>
					{props.favorite ? (
						<SVGIcon variant="heart_filled" color="green" />
					) : (
						<SVGIcon variant="heart_outline" color="green" />
					)}
				</Button>
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
			</DivFlex>
		</SingleReviewCard>
	);
}
