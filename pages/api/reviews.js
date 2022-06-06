import getReviews from '../../src/services/get-reviews';

export default async function handler(req, res) {
	const reviews = await getReviews();

	res.status(200).json(reviews);
}
