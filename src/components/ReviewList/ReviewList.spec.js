import { render, screen } from '@testing-library/react';
import ReviewList from './ReviewList';
import '@testing-library/jest-dom';

describe('Review list', () => {
	it('renders two reviews', () => {
		render(
			<ReviewList
				reviewData={[
					{
						id: 1,
						name: 'Creme',
						rating: 'good',
						comment: 'Loved this',
						location: 'Edeka, 22765 Hamburg',
					},
					{
						id: 2,
						name: 'ice cream',
						rating: 'middling',
						comment: 'Quite good',
						location: 'Eisbande, 20357 Hamburg',
					},
				]}
			/>
		);

		const productName = screen.getAllByRole('heading', { level: 3 });
		const rating1 = screen.getByText('good');
		const rating2 = screen.getByText(/middling/i);
		const reviewComment1 = screen.getByText(/Loved this/i);
		const reviewComment2 = screen.getByText('Quite good');
		const location1 = screen.getByText(/Edeka, 22765 Hamburg/i);
		const location2 = screen.getByText(/Eisbande, 20357 Hamburg/i);

		expect(productName[0]).toBeInTheDocument();
		expect(productName[1]).toBeInTheDocument();
		expect(rating1).toBeInTheDocument();
		expect(rating2).toBeInTheDocument();
		expect(reviewComment1).toBeInTheDocument();
		expect(reviewComment2).toBeInTheDocument();
		expect(location1).toBeInTheDocument();
		expect(location2).toBeInTheDocument();
	});
});
