import { ModalWindow } from '../../UI/Modal.styled';
import { Button } from '../../UI/Button.styled';
import useStore from '../../useStore/useStore';

export default function Modal() {
	const modalState = useStore(state => state.modalState);
	const modalHide = useStore(state => state.modalHide);
	if (modalState === true) {
		return (
			<ModalWindow>
				<p>Thank you for your review!</p>
				<Button type="button" variant="close" onClick={modalHide}>
					Close
				</Button>
			</ModalWindow>
		);
	} else {
		return '';
	}
}
