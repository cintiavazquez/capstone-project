import styled from 'styled-components';

export const ImageWrapper = styled.div`
	width: ${({ width = '' }) => width};
	height: ${({ height = '' }) => height};
	position: relative;
	object-fit: cover;
	display: flex;
	justify-content: ${({ justifyContent = '' }) => justifyContent};
`;
