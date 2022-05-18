import { Button } from '../../components/Button/Button.styled';

export default {
	title: 'Components/Form/Button',
	component: Button,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

const propsSubmit = {
	children: 'Post review',
};

const propsClose = {
	children: 'Close',
};

export function Submit() {
	return <Button {...propsSubmit} />;
}
export function Close() {
	return <Button variant="close" {...propsClose} />;
}
