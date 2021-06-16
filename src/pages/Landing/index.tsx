import React from 'react';
import  Input from '../../components/input/index';
import { GlobalStyle } from '../../styles';

function Landing() {
               return (
                              <div className="div_landing">
                                <div className="div_landing_left"></div>
                                <div className="div_landing_right">
                                <div className="div_input">
                                  <div className='div_input_child'>
                                      <p>Login</p>
                                      <Input placeholder='login' label='Login' >Login</Input>
                                  </div>
                                  <div className='div_input_child'>
                                    <p>Senha</p>
                                    <Input placeholder='senha' label='Senha'>Senha </Input>
                                  </div>
                                  </div>
                              </div>
                              </div>
                          )
                        
}

export default Landing;