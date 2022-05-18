import { Input } from '../../components/Form/Input.styled';
import { Label } from '../../components/Form/Label.styled';

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
