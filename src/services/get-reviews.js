import Review from '../models/Review';
import { dbConnect } from '../lib/db/database';

export default async function getReviews() {
	await dbConnect();

	const reviews = await Review.find();

	return reviews.map(({ id, name, rating, location, comment, image, altText, favorite }) => {
		return {
			id,
			name,
			rating,
			location,
			comment,
			image,
			altText,
			favorite,
		};
	});
}
