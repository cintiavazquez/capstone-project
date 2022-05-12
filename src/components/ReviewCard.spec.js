import { render, screen } from '@testing-library/react';
import ReviewCard from './ReviewCard';
import '@testing-library/jest-dom';

describe('ReviewCard', () => {
	it('renders four strings', () => {
		render(
			<ReviewCard
				name="Chocolate"
				rating="so-so"
				comment="Chocolicious"
				location="The moon"
			/>
		);

		const productName = screen.getByText(/chocolate/i);
		const rating = screen.getByText(/so-so/i);
		const reviewComment = screen.getByText(/chocolicious/i);
		const location = screen.getByText(/the moon/i);

		expect(productName).toBeInTheDocument();
		expect(rating).toBeInTheDocument();
		expect(reviewComment).toBeInTheDocument();
		expect(location).toBeInTheDocument();
	});
});
