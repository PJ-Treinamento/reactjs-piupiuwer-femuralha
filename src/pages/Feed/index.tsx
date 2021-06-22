
import React, {FormEvent, useState, useContext, useEffect} from 'react';
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
  Wrap,
  PiuPost,
  PostPiu
  } from './styles';
import { render } from '@testing-library/react';
import Input from '../../components/input';

function Feed() {
  const {token, user} = useContext(AuthContext);
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

  const [values, setValues] = useState<{ text: string}>({ text: '' })

  const postPiu = async (event: FormEvent) => {
		event.preventDefault()
		const postResponse = await api.post('/pius', {
      text: values.text},
      {headers: { authorization: `Bearer ${token}` }})
    const {text} = postResponse.data
    console.log(text)
	};

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target;
		setValues({
			...values,
			[name]: value,
		})

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
          <PiuPost>
            <img className='Profile-pic' src={`${user.photo}`} alt="" />
            <Input id='text'
                name='text'
                label='Text'
                onChange={onChange}
                ></Input>
            <PostPiu onClick={postPiu}>Piu</PostPiu> 
          </PiuPost>
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