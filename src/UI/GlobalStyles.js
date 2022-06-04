import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
	font-size: 62.5%;
}
body {
	padding: 0;
	margin: 0;
	font-family: 'Lato', sans-serif;
	font-size: 1.6rem;
}

a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
}

.logo{
	font-family: "Pacifico";
}
.landing{
	font-family: "Pacifico";
	font-size: 20vw;
	position: absolute;
	top: 20;
	left:80;

}

:root {
	--darkest-color: #000000;
	--dark-green-grey: #384032;
	--dark-lilac: #431e41;

	--medium-green: #8ea37e;
	--medium-lilac: #937ea3;
	--medium-grey: #808080;

	--light-lilac: #dcd5e1;
	--light-green: #bbc8b2;
	--lightest-color: white;

	--rating-good: #78c041;
	--rating-okay: orange;
	--rating-bad: #EB144C;

	--text-dark: #474747;
	--text-medium: #787878;
	--text-light: #A2A2A2;

	--delete-pink: #E2BEC6;
	--light-creme: #E5E2C7;
}

.custom-popup .leaflet-popup-content-wrapper {
  background:var(--dark-green-grey);
  color:var(--lightest-color);
  opacity: 0.9;
  font-size:14px;
  line-height:24px;
  }


.custom-popup .leaflet-popup-tip {
    background: var(--dark-green-grey);
	opacity: 0.9;
} 
 
`;

export default GlobalStyle;
