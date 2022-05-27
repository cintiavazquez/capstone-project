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
	${({ variant }) =>
		variant === 'delete' &&
		css`
      background-color: red;
	  color: white;
      border: none;
      }
    `}
	${({ variant }) =>
		variant === 'edit' &&
		css`
      background-color: yellow;
	  color: black;
      border: 1px solid black;
      }
	  `}
	  ${({ variant }) =>
		variant === 'nav' &&
		css`
      border: none;
	  background-color: transparent;
      }
	  `}
	  ${({ variant }) =>
		variant === 'favorite' &&
		css`
      border: none;
	  background-color: transparent;
      }
    `}
`;
