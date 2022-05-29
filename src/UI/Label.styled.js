import styled from 'styled-components';
export const Label = styled.label`
	padding: 0px;
	font-size: 1.4rem;
	color: var(--text-medium);
	line-height: ${({ lineHeight = '0%' }) => lineHeight};
`;
