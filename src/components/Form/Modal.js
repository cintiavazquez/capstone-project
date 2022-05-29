import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';
import DivFlex from '../../UI/DivFlex.styled';
import Div from '../../UI/Div.styled';
import Typography from '../../UI/Typography';
import { SVGAnimation } from '../../UI/SVGAnimation';

export default function Modal() {
	const modalState = useStore(state => state.modalState);
	const setModalState = useStore(state => state.setModalState);
	const modalMessages = useStore(state => state.modalMessages);
	const deleteReview = useStore(state => state.deleteReview);
	const ID = useStore(state => state.id);

	const resetModal = () => {
		setModalState(null);
	};

	switch (modalState) {
		case 'sent':
			return (
				<Div
					position="fixed"
					top="0"
					right="0"
					bottom="0"
					left="0"
					background="rgba(147, 146, 146, 0.7);"
					zIndex="100"
				>
					<DivFlex
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						height="40%"
						top="25%"
						background="rgba(254, 254, 254, 0.9);"
						borderRadius="none"
					>
						<SVGAnimation
							xmlns="http://www.w3.org/2000/svg"
							width="100"
							height="100"
							viewBox="0 0 48 48"
							stroke="var(--medium-lilac)"
						>
							<path
								fill="transparent"
								d="M18 32.34l-8.34-8.34-2.83 2.83 11.17 11.17 24-24-2.83-2.83z"
							/>
						</SVGAnimation>
						<Typography
							variant="p"
							component="p"
							fontSize="1.6rem"
							color="var(--medium-text)"
							fontWeight="300"
						>
							{modalMessages[modalState]}
						</Typography>

						<Button type="button" variant="close" onClick={resetModal}>
							Close
						</Button>
					</DivFlex>
				</Div>
			);
		case 'delete':
			return (
				<Div
					position="fixed"
					top="0"
					right="0"
					bottom="0"
					left="0"
					background="rgba(147, 146, 146, 0.7);"
					zIndex="100"
				>
					<DivFlex
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						height="40%"
						top="25%"
						background="rgba(254, 254, 254, 0.9);"
						borderRadius="none"
					>
						<Typography
							variant="p"
							component="p"
							fontSize="1.6rem"
							color="var(--medium-text)"
							fontWeight="300"
						>
							{modalMessages[modalState]}
						</Typography>
						<Button
							type="button"
							variant="delete"
							onClick={() => {
								deleteReview(ID);
								resetModal();
							}}
						>
							Delete
						</Button>
						<Button type="button" variant="close" onClick={resetModal}>
							Cancel
						</Button>
					</DivFlex>
				</Div>
			);
		case 'updated':
			return (
				<Div
					position="fixed"
					top="0"
					right="0"
					bottom="0"
					left="0"
					background="rgba(147, 146, 146, 0.7);"
					zIndex="100"
				>
					<DivFlex
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						height="40%"
						top="25%"
						background="rgba(254, 254, 254, 0.9);"
						borderRadius="none"
					>
						<SVGAnimation
							xmlns="http://www.w3.org/2000/svg"
							width="100"
							height="100"
							viewBox="0 0 48 48"
							stroke="var(--medium-lilac)"
						>
							<path
								fill="transparent"
								d="M18 32.34l-8.34-8.34-2.83 2.83 11.17 11.17 24-24-2.83-2.83z"
							/>
						</SVGAnimation>
						<Typography
							variant="p"
							component="p"
							fontSize="1.6rem"
							color="var(--medium-text)"
							fontWeight="300"
						>
							{modalMessages[modalState]}
						</Typography>

						<Button type="button" variant="close" onClick={resetModal}>
							Close
						</Button>
					</DivFlex>
				</Div>
			);
		default:
			return null;
	}
}
