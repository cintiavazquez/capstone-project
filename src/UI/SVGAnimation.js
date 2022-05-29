import styled from 'styled-components';
export const SVGAnimation = styled.svg`
	stroke-width: 2px;
	stroke-dasharray: 0;
	stroke-dashoffset: -99.47578430175781px;
	animation: dash linear forwards;
	animation-duration: 0.7s;

	@keyframes dash {
		from {
			stroke-dashoffset: -99.47578430175781px;
			stroke-dasharray: 2000;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
`;
