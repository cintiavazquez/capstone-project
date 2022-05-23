import { ModalWindow } from '../../UI/Modal.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';

export default function Modal() {
	const modalStates = useStore(state => state.modalStates);
	const modalHide = useStore(state => state.modalHide);
	const modalMessages = useStore(state => state.modalMessages);
	const deleteReview = useStore(state => state.deleteReview);
	const ID = useStore(state => state.id);

	const handleDelete = () => {
		deleteReview(ID);
		modalHide('delete');
	};

	if (modalStates.sent === true) {
		return (
			<ModalWindow>
				<p>{modalMessages.sent}</p>
				<Button type="button" variant="close" onClick={() => modalHide('sent')}>
					Close
				</Button>
			</ModalWindow>
		);
	}
	if (modalStates.updated === true) {
		return (
			<ModalWindow>
				<p>{modalMessages.updated}</p>
				<Button type="button" variant="close" onClick={() => modalHide('updated')}>
					Close
				</Button>
			</ModalWindow>
		);
	}
	if (modalStates.delete === true) {
		return (
			<ModalWindow>
				<p>{modalMessages.delete}</p>
				<Button type="button" variant="delete" onClick={() => handleDelete()}>
					Delete
				</Button>
				<Button type="button" variant="close" onClick={() => modalHide('delete')}>
					Cancel
				</Button>
			</ModalWindow>
		);
	} else {
		return null;
	}
}

/* onClick={() => deleteReview(ID)} */
