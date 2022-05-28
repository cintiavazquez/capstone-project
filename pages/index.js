import dynamic from 'next/dynamic';
import useStore from '../src/useStore/useStore';
import Div from '../src/UI/Div.styled';
//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const ReviewList = dynamic(() => import('../src/components/ReviewList/ReviewList'), {
	ssr: false,
});
const Modal = dynamic(() => import('../src/components/Form/Modal'), {
	ssr: false,
});

export default function Home() {
	const editmode = useStore(state => state.editmode);
	return (
		<Div maxWidth="500px" margin="10vh auto 10vh auto">
			<Modal />
			{!editmode && <ReviewList />}
		</Div>
	);
}
