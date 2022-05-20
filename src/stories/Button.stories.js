import { Button } from '../UI/Button.styled';

export default {
	title: 'Components/Button',
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

const propsDel = {
	children: 'Delete',
};

export function Submit() {
	return <Button {...propsSubmit} />;
}
export function Close() {
	return <Button variant="close" {...propsClose} />;
}

export function Delete() {
	return <Button variant="delete" {...propsDel} />;
}