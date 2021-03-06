import styled from 'styled-components';
import { css } from 'styled-components';
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
	aspect-ratio: ${({ aspectRatio = '' }) => aspectRatio};

	${props =>
		props.LayoutQuery &&
		css`
			@media only screen and (min-width: 790px) {
				min-width: 770px;
				max-width: 800px;
				margin: 100px auto 20px auto;
			}
		`}
`;

export default DivStyled;
