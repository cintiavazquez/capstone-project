import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
	font-size: 62.5%;
}
body {
	padding: 0;
	margin: 0;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.6rem;
}

a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
}

:root {
	--darkest-color: #000000;
	--dark-lilac: #431e41;

	--medium-green: #8ea37e;
	--medium-lilac: #937ea3;
	--medium-grey: #808080;

	--light-lilac: #dcd5e1;
	--light-green: #bbc8b2;
	--lightest-color: white;

	--rating-good: #78c041;
	--rating-okay: orange;
	--rating-bad: red;

	--text-dark: #474747;
	--text-medium: #787878;
}

`;

export default GlobalStyle;
