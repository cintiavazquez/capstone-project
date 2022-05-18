import { Input } from '../../UI/Input.styled';
import { Label } from '../../UI/Label.styled';

export default {
	title: 'Components/Form/Input',
	component: Input,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

const props = {
	children: 'Where did you buy this product?',
};

export function Default() {
	return (
		<>
			<Label {...props} />
			<Input />
		</>
	);
}
