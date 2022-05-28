import Form from '../src/components/Form/Form';
import Modal from '../src/components/Form/Modal';
import Div from '../src/UI/Div.styled';
export default function Post() {
	return (
		<Div maxWidth="500px" margin="10vh auto 10vh auto">
			<Modal />
			<Form />
		</Div>
	);
}
