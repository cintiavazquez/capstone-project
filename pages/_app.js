import Layout from '../src/components/Layout/Layout';
import GlobalStyles from '../src/UI/GlobalStyles';
import { useEffect } from 'react';
import useStore from '../src/useStore/useStore';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		useStore.getState().fetchReviews();
	}, []);
	return (
		<Layout>
			<GlobalStyles />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
