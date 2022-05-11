import ReviewCard from '../components/ReviewCard';

export default {
	title: 'Components/ReviewCard',
	component: ReviewCard,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

const props = {
	name: 'vegan white chocolate',
	rating: 'bad',
	comment: 'Tastes literally like nothing',
	location: 'Alnatura Hahnenkamp 1, 22765 Hamburg',
};

export function Default() {
	return <ReviewCard {...props} />;
}
