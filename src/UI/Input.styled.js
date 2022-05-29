import styled from 'styled-components';
export const Input = styled.input`
	width: 100%;
	border: 1px solid var(--medium-lilac);
	padding: 12px;
	border-radius: 10px;
	position: ${({ position = 'relative' }) => position};
	top: ${({ top = '' }) => top};
	left: ${({ left = '' }) => left};
`;
