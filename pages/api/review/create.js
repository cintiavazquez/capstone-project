import Review from '../../../src/models/Review';
import { dbConnect } from '../../../src/lib/db/database';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const newReviewData = JSON.parse(req.body);
		await dbConnect();

		const newReview = await Review.create({
			name: newReviewData.name,
			rating: newReviewData.rating,
			comment: newReviewData.comment,
			location: newReviewData.location,
			image: newReviewData.image,
			altText: newReviewData.altText,
			favorite: newReviewData.favorite,
			zoom: newReviewData.zoom,
		});

		res.status(200).json({
			message: 'review created',
			entry: newReview,
		});
	} else {
		res.status(405).json({ error: 'wrong method' });
	}
}
