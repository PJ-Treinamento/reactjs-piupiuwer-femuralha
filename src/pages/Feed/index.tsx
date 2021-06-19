import React from 'react';
import { GlobalStyle } from '../../styles';


import { Button_feed, Galinha, Header, Wrapper_right } from './styles';

function Feed() {
  return (
    <Header>
      <Galinha />
      <Wrapper_right>
        <ul>
          <li>Tendências</li>
          <li>Mensagens</li>
        </ul>
        <Button_feed>Perfil</Button_feed>
      </Wrapper_right>
    </Header>
  )
}


export default Feed