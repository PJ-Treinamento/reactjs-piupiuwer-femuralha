import styled, { keyframes } from "styled-components";
import fundoLoginEsq from '../../assets/images/esq-login.svg'
import fundoLoginDir from '../../assets/images/dir-login.svg'
import logoGalinha from '../../assets/images/Galinha.svg'

export const Wrapper = styled.div`
							 display: flex;
							 justify-content: center;
							 flex-direction: row;
							 background-color: #FFB703;                              
						
`
export const Wrap_Esq = styled.div`
							 background:url(${fundoLoginEsq});
							 display: flex;
							 align-items: center;
							 justify-content: center;
							 height: 1024px;
							 width: 50%;
							 max-height: 1400px;
							 max-width: 720px;
							 background-color: #FFB703;
							 @media (max-width:1024px){
															display: none;
							 }
`
export const Wrap_Dir = styled.div`
							 background:url(${fundoLoginDir});
							 height: 1024px;
							 padding-right: 50px;
							 max-height: 1024px;
							 min-width: 560px;
`
export const Div_Input = styled.div`
							 height: 1024px;
							 display: flex;
							 flex-direction: column;
							 align-items: center;
							 justify-content: center;
							 @media (max-width:1024px){
															margin-top: 50px;
							 }
`
export const Div_Label = styled.div`
							 display: flex;
							 flex-direction: column;
							 align-items: flex-start;
							 justify-content: center;
`
export const Wrapper_Button = styled.div`
							 display: flex;
							 justify-content: center;
							 margin-top: 64px;
							 
`
export const Logo = styled.div`
							 background: url(${logoGalinha});
							 background-size: 50px 50px;
							 margin-top: 20px;
							 display: none;
							 height: 50px;
							 width: 50px;
							 @media (max-width:1024px){
															display: flex;
							 }
							 animation: rotation 2s infinite linear;
							 @keyframes rotation {
								from {
									transform: rotate(0deg);
								}
								to {
									transform: rotate(359deg);
								}
}
`
export const Logo_gigante = styled.div`
							 background: url(${logoGalinha});
							 background-size: 400px 400px;
							 margin-top: 20px;
							 display: flex;
							 height: 400px;
							 width: 400px;
							 animation: rotation 5s infinite linear;
							 @keyframes rotation {
								from {
									transform: rotate(0deg);
								}
								to {
									transform: rotate(359deg);
								}
}
`
