import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,500;1,100;1,300;1,500&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Pacifico&family=Vibur&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
				</body>
			</Html>
		);
	}
}
