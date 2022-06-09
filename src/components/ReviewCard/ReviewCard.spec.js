import { render, screen } from '@testing-library/react';
import ReviewCard from './ReviewCard';
import '@testing-library/jest-dom';
import { userEvent } from '@storybook/testing-library';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: 'home',
			query: '',
			asPath: 'home',
		};
	},
}));

describe('ReviewCard', () => {
	it('renders four strings and an image', () => {
		render(
			<ReviewCard
				id="2345"
				favorite={false}
				name="Vegan yoghurt"
				rating="Good"
				comment="delicious"
				location={[53.5507957, 9.9700752, 'Edeka Hamburg']}
				image={{
					url: 'https://images.unsplash.com/photo-1584278433313-562a1bc0aa6b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746',
				}}
				altText="Vegan yoghurt"
				zoom={false}
			/>
		);

		const productName = screen.getByText(/Vegan yoghurt/i);
		const rating = screen.getByTestId('good');

		const button = screen.getByRole('button', { name: /read review/i });
		userEvent.click(button);
		const reviewComment = screen.getByText(/delicious/i);
		const location = screen.getByText(/Edeka Hamburg/i);
		const image = screen.getByAltText(/Vegan yoghurt/i);

		expect(productName).toBeInTheDocument();
		expect(rating).toBeInTheDocument();
		expect(reviewComment).toBeInTheDocument();
		expect(location).toBeInTheDocument();
		expect(image).toBeInTheDocument();
	});
});
