import { Button } from '../../UI/Button.styled';
import SVGIcon from '../../UI/SVGIcon';

export default {
	title: 'Components/Navigation',
	component: NavIcon,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function NavIcon() {
	return (
		<Button variant="nav">
			<SVGIcon variant="home" color="white" />
		</Button>
	);
}
