import { ListGrid } from '../src/UI/ListGrid.styled';
import Form from '../src/components/Form/Form';
import Modal from '../src/components/Form/Modal';
import dynamic from 'next/dynamic';

export default function Home() {
	const ReviewList = dynamic(() => import('../src/components/ReviewList/ReviewList'), {
		ssr: false,
	});
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
