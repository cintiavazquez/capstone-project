import styled from 'styled-components';

export const ListGrid = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	padding: 10px;
	margin-bottom: 20vh;

	@media (min-width: 770px) {
		display: flex;
		flex-flow:row;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 50px;
		
`;
