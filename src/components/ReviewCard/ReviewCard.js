import { SingleReviewCard } from '../../UI/ReviewCard.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ImageWrapper } from '../../UI/ImageWrapper';
import SVGIcon from '../../UI/SVGIcon';
import DivFlex from '../../UI/DivFlex.styled';
import DivStyled from '../../UI/DivStyled.styled';
import Typography from '../../UI/Typography.js';
import { useState } from 'react';

export default function ReviewCard(props) {
	const setModalState = useStore(state => state.setModalState);
	const setID = useStore(state => state.setID);
	const showEdit = useStore(state => state.showEdit);
	const favoriteTrue = useStore(state => state.favoriteTrue);
	const favoriteFalse = useStore(state => state.favoriteFalse);
	const router = useRouter();
	const setLocationEdit = useStore(state => state.setLocationEdit);
	const updatePositions = useStore(state => state.updatePositions);
	const zoomTo = useStore(state => state.zoomTo);
	const routedZoomOn = useStore(state => state.routedZoomOn);
	const { asPath } = useRouter();
	const [display, setDisplay] = useState(false);

	return (
		<SingleReviewCard>
			<DivStyled>
				<DivStyled
					position="absolute"
					top="-5px"
					right="-5px"
					background="var(--lightest-color)"
					borderRadius="50%"
					padding="1%"
					zIndex="1"
				>
					<Typography variant="p" component="p" fontSize="0rem" lineHeight="0rem">
						{props.rating == 'Good' ? (
							<SVGIcon variant="smiley_good" color="var(--rating-good)" size="25px" />
						) : props.rating == 'Okay' ? (
							<SVGIcon variant="smiley_okay" color="var(--rating-okay)" size="25px" />
						) : (
							<SVGIcon variant="smiley_bad" color="var(--rating-bad)" size="25px" />
						)}
					</Typography>
				</DivStyled>
				<ImageWrapper width="135px" height="135px" borderRadius="10%">
					<Image
						src={props.image.url}
						alt={props.altText}
						layout="fill"
						objectFit="cover"
					/>
				</ImageWrapper>
			</DivStyled>

			<DivFlex flexDirection="column" width="60%">
				<Typography
					variant="h3"
					component="h3"
					fontStyle="regular"
					fontSize="1.4rem"
					fontWeight="600"
					color="var(--text-dark)"
				>
					{props.name}
				</Typography>

				<DivFlex alignItems="center" gap="2%">
					<Button
						variant="invisible"
						type="button"
						onClick={() => {
							zoomTo(props.id);
							if (asPath === '/profile') {
								routedZoomOn();
								router.push('/');
							}
						}}
					>
						<SVGIcon variant="location" color="var(--medium-lilac)" size="20px" />
					</Button>

					<Typography
						variant="p"
						component="p"
						fontStyle="regular"
						fontSize="1.2rem"
						fontWeight="400"
						color="var(--medium-lilac)"
					>
						{props.location[2]}
					</Typography>
				</DivFlex>

				<DivFlex justifyContent="space-around" alignItems="center">
					<Button
						type="button"
						variant="favorite"
						onClick={() => {
							props.favorite ? favoriteFalse(props.id) : favoriteTrue(props.id);
						}}
					>
						{props.favorite ? (
							<SVGIcon
								variant="heart_filled"
								color="var(--rating-good)"
								size="20px"
							/>
						) : (
							<SVGIcon
								variant="heart_outline"
								color="var(--rating-good)"
								size="20px"
							/>
						)}
					</Button>
					<DivFlex flexDirection="column">
						<Button
							type="button"
							variant="invisible"
							onClick={() => {
								setDisplay(!display);
							}}
						>
							{display ? (
								<DivFlex alignItems="center" justifyContent="space-around">
									<div>
										<Typography
											variant="p"
											component="p"
											fontStyle="regular"
											fontSize="1.2rem"
											fontWeight="400"
											lineHeight="1.2rem"
											color="var(--text-medium)"
										>
											Show less
										</Typography>
									</div>
									<div>
										<SVGIcon variant="chevron_up" color="grey" />
									</div>
								</DivFlex>
							) : (
								<DivFlex alignItems="center" justifyContent="space-around">
									<Typography
										variant="p"
										component="p"
										fontStyle="regular"
										fontSize="1.2rem"
										fontWeight="400"
										lineHeight="1.2rem"
										color="var(--text-medium)"
									>
										Read review
									</Typography>

									<SVGIcon variant="chevron_down" color="var(--text-medium)" />
								</DivFlex>
							)}
						</Button>
						{display && (
							<Typography
								variant="p"
								component="p"
								fontStyle="regular"
								fontSize="1.2rem"
								fontWeight="400"
								lineHeight="1.2rem"
								color="var(--text-medium)"
							>
								{props.comment}
							</Typography>
						)}
					</DivFlex>
				</DivFlex>
			</DivFlex>
			<DivStyled position="absolute" top="2px" right="2px">
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
			</DivStyled>
			<DivStyled position="absolute" bottom="2px" right="2px">
				<Button
					type="button"
					variant="invisible"
					onClick={() => {
						setID(props.id);
						showEdit();
						setLocationEdit(props.location[0], props.location[1]);
						updatePositions(props.location[0], props.location[1], 'See on map');
						router.push('/post');
					}}
				>
					<SVGIcon variant="edit" color="grey" size="20px" />
				</Button>
			</DivStyled>
		</SingleReviewCard>
	);
}
