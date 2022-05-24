import { ModalWindow } from '../../UI/Modal.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';

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
				<ModalWindow>
					<p>{modalMessages[modalState]}</p>
					<Button type="button" variant="close" onClick={resetModal}>
						Close
					</Button>
				</ModalWindow>
			);
		case 'delete':
			return (
				<ModalWindow>
					<p>{modalMessages[modalState]}</p>
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
				</ModalWindow>
			);
		case 'updated':
			return (
				<ModalWindow>
					<p>{modalMessages[modalState]}</p>
					<Button type="button" variant="close" onClick={resetModal}>
						Close
					</Button>
				</ModalWindow>
			);
		default:
			return null;
	}
}
