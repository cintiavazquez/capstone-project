import styled, { css } from 'styled-components';
export const Button = styled.button`
	padding: 5px;

	${({ variant = 'post' }) =>
		variant === 'post' &&
		css`
      background-color: seagreen;
	  color: white;
      border: none;
      }
    `}
	${({ variant }) =>
		variant === 'close' &&
		css`
      background-color: blue;
	  color: white;
      border: none;
      }
    `}
`;
