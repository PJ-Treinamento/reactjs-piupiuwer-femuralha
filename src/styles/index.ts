import { useLayoutEffect } from 'react';
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
h2{
	font:600 16px Montserrat;;
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

ul{
	list-style: none;
	display: flex;
	align-items: center;
}
li{
	display: flex;
	align-items: center;
	font-size: 15px;
	margin-right: 20px;
	font-weight: bold;
}
a{
	cursor: pointer;
	text-decoration: none;
}


.Count{
	font:600 10px Montserrat;
	margin-left: 2px;
}
.Wrap-flex{
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
}
.Input-Comment{
	background: rgba(209, 209, 209, 0.2);
	border-radius: 8px;
	width: 182px;
	height: 25px;
	border: 1px #667581;
}
.Profile-pic{
	height: 35px;
  width: 35px;
  margin-top: 2px;
  margin-left: 5px;
  border-radius: 50%;
  object-fit: cover;
}
`

 