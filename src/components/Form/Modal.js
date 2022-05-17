import { ModalWindow } from './Modal.styled';
import { Button } from '../Button/Button.styled';
export default function Modal({ visibility, modalHide }) {
	if (visibility === true) {
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
