
import React, {useState} from 'react';
import { useEffect } from 'react';
import PiuComp from '../../components/piu';
import api from '../../services/api';
import { GlobalStyle } from '../../styles';


import { 
  Button_feed,
  Galinha,
  Header,
  Wrapper_down,
  Wrapper_right, 
  Timeline, Aside,
  Wrap
  } from './styles';

function Feed() {

  const [pius, Setpius] = useState(null)

  const fetchData = async () => {

  const response = await api.get('/pius')

  Setpius(response.data)
  }

  

  return (
    <div>
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
    <Wrap>
      <Wrapper_down>
        <Aside></Aside>
        <Timeline>
          <button onClick={fetchData}></button>
          <PiuComp/>
          <PiuComp/>
          <PiuComp/>
        </Timeline>
      </Wrapper_down>
    </Wrap>
  </div>
  )
}


export default Feed