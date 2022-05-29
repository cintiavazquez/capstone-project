import styled, { css } from 'styled-components';
export const Button = styled.button`
	padding: 5px;
	${({ variant = 'invisible' }) =>
		variant === 'invisible' &&
		css`
		border: none;
		background-color: transparent;
      }
    `}

	${({ variant = 'post' }) =>
		variant === 'post' &&
		css`
		border: 3px solid transparent;
		border-radius: 50px;
		background:linear-gradient(white, white) padding-box,linear-gradient(to right, var(--dark-lilac), var(--rating-good)) border-box;
		color: var(--text-dark);
		padding: 15px;
		
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
