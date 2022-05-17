import ReviewList from '../src/components/ReviewList/ReviewList';
import { ListGrid } from '../src/components/ReviewList/ListGrid.styled';
import Form from '../src/components/Form/Form';
import useStore from '../src/useStore/useStore';
import React, { useState } from 'react';
import Modal from '../src/components/Form/Modal';

export default function Home() {
	const reviews = useStore(state => state.review);
	const [modalState, setModalState] = useState(false);

	const modalHide = () => {
		setModalState(false);
	};
	const modalShow = () => {
		setModalState(true);
	};
	return (
		<ListGrid>
			<Modal visibility={modalState} modalHide={modalHide} />
			<Form modalShow={modalShow} />
			<ReviewList reviewData={reviews} />
		</ListGrid>
	);
}
