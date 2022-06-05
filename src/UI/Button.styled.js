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
			background: linear-gradient(var(--lightest-color), var(--lightest-color)) padding-box,
				linear-gradient(to right, var(--dark-lilac), var(--rating-good)) border-box;
			padding: 15px;
			font-size: 1.4rem;
			font-weight: 700;
			color: var(--dark-lilac);

			@media only screen and (min-width: 350px) {
				width: 300px;
				margin-left: auto;
				margin-right: auto;
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
      
      }
    `}
	${({ variant }) =>
		variant === 'delete' &&
		css`
       background-color: var(--delete-pink);
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
		variant === 'favorite' &&
		css`
      border: none;
	  background-color: transparent;
      }
    `}
`;
