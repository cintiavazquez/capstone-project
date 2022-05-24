import Navbar from '../../components/Navbar/Navbar';

export default {
	title: 'Components/Navigation',
	component: Navbar,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Navbar />;
}
