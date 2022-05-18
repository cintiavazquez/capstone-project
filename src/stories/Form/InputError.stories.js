import { FormWarning } from '../../components/Form/FormWarning.styled';
import { Input } from '../../components/Form/Input.styled';
import { Label } from '../../components/Form/Label.styled';

export default {
	title: 'Components/Form/Input error',
	component: FormWarning,
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
			<FormWarning {...propsError} />
		</>
	);
}
