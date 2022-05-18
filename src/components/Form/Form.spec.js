import { render, screen } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
	it('renders three input fields, one fieldset and a submit button', () => {
		render(<Form />);

		const productRating = screen.getByRole('group', {
			name: /rate the product:/i,
		});
		const productName = screen.getByLabelText(/Product name:/i);
		const productLocation = screen.getByLabelText(/Where did you buy this product?/i);
		const productReview = screen.getByLabelText(/Write your review/i);
		const submitButton = screen.getByRole('group', {
			name: /rate the product:/i,
		});

		expect(productName).toBeInTheDocument();
		expect(productLocation).toBeInTheDocument();
		expect(productReview).toBeInTheDocument();
		expect(productRating).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});
