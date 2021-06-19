import { createGlobalStyle } from 'styled-components';
import fundoLoginDir from '../assets/images/dir-login.svg'
import fundoLoginEsq from '../assets/images/esq-login.svg'
export const color = {
	primary: 'black',
	secondary: 'green'
}
export const GlobalStyle = createGlobalStyle`
body{
		margin: 0;
		padding: 0;
		background: #ffffff;
		font-family: Montserrat;
		background-color: #FFB703;
}
label{
		margin-top: 2px;
		margin-bottom: 2px;
		margin-left: 7px;
		font:  400 16px Montserrat;
}
button {
		width: 240px;
		height: 56px;
		border-radius: 40px;
		margin-right: 1.6rem;
		font:  600 20px Montserrat;
		border: 1px solid #667581;
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
		text-decoration: none;
		background-color: #FFB703;
		transition: all 0.5s;
		}
button:hover{
		transform: scale(1.1) perspective(1px);
		cursor: pointer;
}
`
