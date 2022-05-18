import { TextArea } from '../../components/Form/TextArea.styled';
import { Label } from '../../components/Form/Label.styled';

export default {
	title: 'Components/Form/Textarea',
	component: TextArea,
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
			<TextArea />
		</>
	);
}
