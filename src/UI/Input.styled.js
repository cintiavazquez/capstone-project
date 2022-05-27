import styled from 'styled-components';
export const Input = styled.input`
	background-color: lightblue;
	display: ${({ display = 'block' }) => display};
	opacity: ${({ opacity = 100 }) => opacity};
`;
