import ReviewList from '../src/components/ReviewList/ReviewList';
import { ListGrid } from '../src/components/ReviewList/ListGrid.styled';
import Form from '../src/components/Form/Form';
import useStore from '../src/useStore/useStore';

export default function Home() {
	const reviews = useStore(state => state.review);
	return (
		<ListGrid>
			<Form />
			<ReviewList reviewData={reviews} />
		</ListGrid>
	);
}
