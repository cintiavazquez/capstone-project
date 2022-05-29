import ReviewList from '../components/ReviewList/ReviewList';

export default {
	title: 'Components/Review list',
	component: ReviewList,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

function Template(args) {
	return <ReviewList {...args} />;
}

export const Default = Template.bind({});
Default.args = {
	// Shaping the stories through args composition.
	// The data was inherited from the Default story in Task.stories.js.
	reviewData: [
		{
			id: 1,
			name: 'Creme Vega',
			rating: 'good',
			comment:
				'Loved this vegan alternative to sour cream, even though it’s a bit pricey for daily use',
			location: 'Edeka Bandelt Ottenser Hauptstraße 10, 22765 Hamburg',
		},
		{
			id: 2,
			name: 'caramel ice cream',
			rating: 'okay',
			comment: 'Quite good vegan ice cream',
			location: 'Eisbande Bartelsstraße 1, 20357 Hamburg',
		},
		{
			id: 3,
			name: 'vegan white chocolate',
			rating: 'bad',
			comment: 'Tastes literally like nothing',
			location: 'Alnatura Hahnenkamp 1, 22765 Hamburg',
		},
	],
};
