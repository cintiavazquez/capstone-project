import { InputWarning } from '../../UI/InputWarning.styled';
import { Input } from '../../UI/Input.styled';
import { Label } from '../../UI/Label.styled';

export default {
	title: 'Components/Form/Input error',
	component: InputWarning,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

const propsError = {
	children: 'Please enter a name',
};

const props = {
	children: 'Where did you buy this product?',
};

export function Default() {
	return (
		<>
			<Label {...props} />
			<Input />
			<InputWarning {...propsError} />
		</>
	);
}
