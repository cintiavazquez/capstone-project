import styled from 'styled-components';
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

const ModalWindow = styled.div`
	color: black;
	width: 100vw;
	height: 100vh;
	position: fixed;
	text-align: center;
	background-color: white;
`;
