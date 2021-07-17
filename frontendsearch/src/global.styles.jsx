import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
	max-width:100vw;
	font-family: 'Montserrat';

	overflow-x:hidden;

}

a {
	text-decoration: none;
	color: black;
}

* {
	box-sizing: border-box;
}
`;
