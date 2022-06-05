import styled from 'styled-components';
export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-right: 10%;
	margin-left: 10%;
	margin-bottom: 20vh;

	@media only screen and (min-width: 1000px) {
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
`;
