import styled from 'styled-components';

export default function Modal({ visibility, modalHide }) {
	if (visibility === true) {
		return (
			<ModalWindow>
				<p>Thank you for your review!</p>
				<button type="button" onClick={modalHide}>
					Close
				</button>
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
