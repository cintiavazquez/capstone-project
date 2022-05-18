import ReviewList from '../src/components/ReviewList/ReviewList';
import { ListGrid } from '../src/components/ReviewList/ListGrid.styled';
import Form from '../src/components/Form/Form';
import Modal from '../src/components/Form/Modal';

export default function Home() {
	return (
		<>
			<Modal />
			<Form />
			<ListGrid>
				<ReviewList />
			</ListGrid>
		</>
	);
}
