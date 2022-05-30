import Layout from '../src/components/Layout/Layout';
import GlobalStyles from '../src/UI/GlobalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<GlobalStyles />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
