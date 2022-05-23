import Form from '../src/components/Form/Form';
//import Modal from '../src/components/Form/Modal';
import dynamic from 'next/dynamic';
import useStore from '../src/useStore/useStore';

export default function Home() {
	//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
	const ReviewList = dynamic(() => import('../src/components/ReviewList/ReviewList'), {
		ssr: false,
	});
	const Modal = dynamic(() => import('../src/components/Form/Modal'), {
		ssr: false,
	});
	const editmode = useStore(state => state.editmode);
	return (
		<>
			<Modal />
			<Form />
			{!editmode && <ReviewList />}
		</>
	);
}
