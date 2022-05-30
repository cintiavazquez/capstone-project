import { Button } from '../UI/Button.styled';
import SVGIcon from '../UI/SVGIcon';

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

const propsEdit = {
	children: <SVGIcon variant="edit" color="grey" size="20px" />,
};

export function Submit() {
	return <Button variant="post" {...propsSubmit} />;
}
export function Close() {
	return <Button variant="close" {...propsClose} />;
}

export function Delete() {
	return <Button variant="delete" {...propsDel} />;
}

export function Edit() {
	return <Button variant="edit" {...propsEdit} />;
}
