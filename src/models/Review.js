import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
	name: String,
	rating: String,
	comment: String,
	location: {
		lat: Number,
		long: Number,
		geoname: String,
	},
	image: {
		url: String,
	},
	altText: String,
	favorite: Boolean,
	zoom: Boolean,
});
const Review = mongoose.models?.Review ?? mongoose.model('Review', reviewSchema);

export default Review;
