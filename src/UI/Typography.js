import styled from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h1':
			return (
				<StyledH1 {...rest} as={component}>
					{children}
				</StyledH1>
			);
		case 'h2':
			return (
				<StyledH2 {...rest} as={component}>
					{children}
				</StyledH2>
			);
		case 'h3':
			return (
				<StyledH3 {...rest} as={component}>
					{children}
				</StyledH3>
			);
		case 'h4':
			return (
				<StyledH4 {...rest} as={component}>
					{children}
				</StyledH4>
			);

		default:
			return (
				<StyledP {...rest} as={component}>
					{children}
				</StyledP>
			);
	}
}

const StyledH1 = styled.h1`
	color: ${({ color }) => color};
	text-align: ${({ textAlign }) => textAlign};
	font-style: ${({ fontStyle }) => fontStyle};
	font-size: ${({ fontSize }) => fontSize};
	font-weight: ${({ fontWeight }) => fontWeight};
	line-height: ${({ lineHeight }) => lineHeight};
	height: ${({ height }) => height};
	background: ${({ background }) => background};
`;
const StyledH2 = styled.h2`
	color: ${({ color }) => color};
	text-align: ${({ textAlign }) => textAlign};
	font-style: ${({ fontStyle }) => fontStyle};
	font-size: ${({ fontSize }) => fontSize};
	font-weight: ${({ fontWeight }) => fontWeight};
	line-height: ${({ lineHeight }) => lineHeight};
	height: ${({ height }) => height};
	background: ${({ background }) => background};
`;
const StyledH3 = styled.h3`
	color: ${({ color }) => color};
	text-align: ${({ textAlign }) => textAlign};
	font-style: ${({ fontStyle }) => fontStyle};
	font-size: ${({ fontSize }) => fontSize};
	font-weight: ${({ fontWeight }) => fontWeight};
	line-height: ${({ lineHeight }) => lineHeight};
	height: ${({ height }) => height};
	background: ${({ background }) => background};
`;
const StyledH4 = styled.h4`
	color: ${({ color }) => color};
	text-align: ${({ textAlign }) => textAlign};
	font-style: ${({ fontStyle }) => fontStyle};
	font-size: ${({ fontSize }) => fontSize};
	font-weight: ${({ fontWeight }) => fontWeight};
	line-height: ${({ lineHeight }) => lineHeight};
	height: ${({ height }) => height};
	background: ${({ background }) => background};
`;

const StyledP = styled.p`
	color: ${({ color }) => color};
	text-align: ${({ textAlign }) => textAlign};
	font-style: ${({ fontStyle }) => fontStyle};
	font-size: ${({ fontSize }) => fontSize};
	font-weight: ${({ fontWeight }) => fontWeight};
	line-height: ${({ lineHeight }) => lineHeight};
	height: ${({ height }) => height};
	background: ${({ background }) => background};
	position: ${({ position }) => position};
`;
