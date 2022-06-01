import styled from 'styled-components';
const DivStyled = styled.div`
	margin: ${({ margin = '0px' }) => margin};
	padding: ${({ padding = '0px' }) => padding};
	width: ${({ width = 'auto' }) => width};
	max-width: ${({ maxWidth = 'auto' }) => maxWidth};
	min-width: ${({ minWidth = 'auto' }) => minWidth};
	height: ${({ height = '' }) => height};
	border: ${({ border = '' }) => border};
	border-radius: ${({ borderRadius = '' }) => borderRadius};
	color: ${({ color = '' }) => color};
	text-align: ${({ textAlign = '' }) => textAlign};
	vertical-align: ${({ verticalAlign = '' }) => verticalAlign};
	background: ${({ background = '' }) => background};
	box-shadow: ${({ boxShadow = 'none' }) => boxShadow};
	display: ${({ display = 'block' }) => display};
	gap: ${({ gap = '0px' }) => gap};
	position: ${({ position = 'relative' }) => position};
	left: ${({ left = '' }) => left};
	right: ${({ right = '' }) => right};
	top: ${({ top = '' }) => top};
	bottom: ${({ bottom = '' }) => bottom};
	z-index: ${({ zIndex = '' }) => zIndex};
	object-fit: ${({ objectFit = '' }) => objectFit};
	overflow: ${({ overflow = '' }) => overflow};
	cursor: ${({ cursor = '' }) => cursor};
`;

export default DivStyled;
