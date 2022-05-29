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
		padding: 15px;
		font-size: 1.4rem;
		font-weight: 700;
		color:var(--dark-lilac);
		
      }
    `}
	${({ variant }) =>
		variant === 'close' &&
		css`
      background-color: var(--light-lilac);
	  border: 2px solid var(--medium-lilac);
	  border-radius: 10px;
	  padding: 15px;
	  font-size: 1.6rem;
	  font-weight: 200;
	  color: var(--text-medium);
      
      }
    `}
	${({ variant }) =>
		variant === 'delete' &&
		css`
       background-color: #E2BEC6;
	   border: 2px solid var(--medium-lilac);
	   border-radius: 10px;
	   padding: 15px;
	   font-size: 1.6rem;
	   font-weight: 200;
	   color: var(--text-dark);
	   margin-bottom: 5px;
		
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
