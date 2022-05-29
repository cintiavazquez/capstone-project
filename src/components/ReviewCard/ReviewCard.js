import { SingleReviewCard } from '../../UI/ReviewCard.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ImageWrapper } from '../../UI/ImageWrapper';
import SVGIcon from '../../UI/SVGIcon';
import DivFlex from '../../UI/DivFlex.styled';
import Div from '../../UI/Div.styled';

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
			<DivFlex flexDirection="column" width="55%" gap="-20px">
				<h3>{props.name}</h3>
				<p>
					{props.rating == 'Good' ? (
						<SVGIcon variant="smiley_great" color="grey" size="20px" />
					) : props.rating == 'Middling' ? (
						<SVGIcon variant="smiley_okay" color="grey" size="20px" />
					) : (
						<SVGIcon variant="smiley_bad" color="grey" size="20px" />
					)}
				</p>

				<p>{props.location}</p>
				<DivFlex justifyContent="space-around">
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
					<DivFlex flexDirection="column">
						<Button
							type="button"
							variant="invisible"
							onClick={() => {
								contentDisplay ? hideContent() : showContent();
							}}
						>
							{contentDisplay ? (
								<DivFlex alignItems="center" justifyContent="space-around">
									<div>
										<p>Show less</p>
									</div>
									<div>
										<SVGIcon variant="chevron_up" color="grey" />
									</div>
								</DivFlex>
							) : (
								<DivFlex alignItems="center" justifyContent="space-around">
									<p>Read review</p>
									<SVGIcon variant="chevron_down" color="grey" />
								</DivFlex>
							)}
						</Button>
						{contentDisplay && <p>{props.comment}</p>}
					</DivFlex>
				</DivFlex>
			</DivFlex>
			<Div position="absolute" top="10px" right="10px">
				<Button
					type="button"
					variant="invisible"
					onClick={() => {
						setID(props.id);
						setModalState('delete');
					}}
				>
					<SVGIcon variant="delete" color="grey" size="20px" />
				</Button>
			</Div>
			<Div position="absolute" bottom="10px" right="10px">
				<Button
					type="button"
					variant="invisible"
					onClick={() => {
						setID(props.id);
						showEdit();
						router.push('/post');
					}}
				>
					<SVGIcon variant="edit" color="grey" size="20px" />
				</Button>
			</Div>
		</SingleReviewCard>
	);
}
