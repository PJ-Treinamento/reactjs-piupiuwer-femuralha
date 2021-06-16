import { createGlobalStyle } from 'styled-components';
import fundoLoginDir from '../assets/images/dir-login.svg'
import fundoLoginEsq from '../assets/images/esq-login.svg'
export const color = {
                         primary: 'black',
                         secondary: 'green'
}
export const GlobalStyle = createGlobalStyle `
                         body{
                                                  margin: 0;
                                                  padding: 0;
                                                  background: #ffffff;
                                                  font-family: Montserrat;
                         }
                         p{
                              margin-bottom: 4px;
                              margin-left: 5px;

                         }
                         .div_landing{
                              display: flex;
                              justify-content: center;
                              flex-direction: row;
                              background-color: #FFB703;
                         }
                         .div_input_child{
                                        display: flex;
                                        align-items: center;
                                        flex-direction: column;
                                        align-items: flex-start;
                                        
                         }
                         .div_input{
                              height: 1024px;
                              display: flex;
                              flex-direction: column;
                               align-items: center;
                              justify-content: center;
                         }
                         .div_landing_right{
                              background:url(${fundoLoginDir});
                              height: 100%;
                              width: 50%;
                              max-height: 1024px;
                              max-width: 720px;
                         }

                         .div_landing_left{
                              background:url(${fundoLoginEsq});
                              height: 1024;
                              width: 50%;
                              max-height: 1400px;
                              max-width: 720px;
                              background-color: #FFB703;
                         }
                         

`
