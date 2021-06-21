
import React, {useState, useContext, useEffect} from 'react';
import PiuComp from '../../components/piu';
import api from '../../services/api';
import { GlobalStyle } from '../../styles';
import AuthContext from '../../contexts/auth';
import { Piu } from '../../components/piu';

import { 
  Button_feed,
  Galinha,
  Header,
  Wrapper_down,
  Wrapper_right, 
  Timeline, Aside,
  Wrap
  } from './styles';
import { render } from '@testing-library/react';

function Feed() {
  const {token} = useContext(AuthContext);
  const [pius, setPius] = useState <Piu[]> ([])

  useEffect(() =>{
    const fetchData = async () => {
  
      const response = await api.get('/pius', {
        headers: { authorization: `Bearer ${token}` }
      })
      setPius(response.data)
      }
      fetchData()
  }, [])

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
          {pius.map( (piu) => {
            return(
             <PiuComp {...piu}/>
            )

          } ) }
        </Timeline>
      </Wrapper_down>
    </Wrap>
  </div>
  )
}


export default Feed