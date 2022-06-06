import Review from '../../src/models/Review';
import { dbConnect } from '../../src/lib/db/database';

export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === 'DELETE') {
		const deletedReview = await Review.findByIdAndDelete(id);
		res.status(200).json({
			message: 'review deleted',
			entry: deletedReview,
		});
		[];
	} else if (req.method === 'PUT') {
		const newReviewData = JSON.parse(req.body);
		await dbConnect();

		const updatedReview = await Review.findByIdAndUpdate(id, newReviewData, {
			new: true,
		});

		res.status(200).json({
			message: 'review edited',
			entry: updatedReview,
		});
	} else {
		const singleReview = await Review.findById(id);
		res.status(200).json(singleReview);
	}
}
