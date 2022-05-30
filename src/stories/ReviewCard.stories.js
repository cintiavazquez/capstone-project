import ReviewCard from '../components/ReviewCard/ReviewCard';

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
	image: {
		url: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
	},
};

export function Default() {
	return <ReviewCard {...props} />;
}
