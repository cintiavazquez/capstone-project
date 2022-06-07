import { useEffect } from 'react';

import Form from '../src/components/Form/Form';
import Modal from '../src/components/Form/Modal';
import useStore from '../src/useStore/useStore';

export default function Post() {
	useEffect(() => {
		useStore.getState().fetchReviews();
	}, []);
	return (
		<>
			<Modal />
			<Form />
		</>
	);
}
