import React, {FormEvent, useState} from 'react';
import  Input from '../../components/input/index';
import { GlobalStyle } from '../../styles';
import { Wrapper, Wrap_Esq, Wrap_Dir, Div_Input, Div_Label, Wrapper_Button, Logo} from './styles';
import { Link } from 'react-router-dom'
import axios from 'axios';


function Landing() {
  
const [values, setValues] =  useState <{user:string, password: string}>({user:'', password:''})

  const handleLogin = async (event:FormEvent) => {
    event.preventDefault()
    const response = await  axios.post('https://piupiuwer.polijrinternal.com/sessions/login', { email:values.user, password:values.password })
    const {token, user}  = response.data
    localStorage.setItem("@PiuPiuwer:token", token)
    localStorage.setItem("@PiuPiuwer:user", JSON.stringify(user))
    
  }

  function onChange(event:React.ChangeEvent<HTMLInputElement>){
    const {value, name} = event.target;

    setValues({
      ...values,
      [name]:value,
    })
  }
	return (
		<Wrapper>
		<Wrap_Esq/>
			<Wrap_Dir>
			<Div_Input>
			<Logo/>
			<form >
				<Div_Label>
					<label htmlFor="User"> User</label>
					<Input
					id='user'
					name='user'
					label='User' 
					onChange={onChange} 
					value={values.user}
					/>
				</Div_Label>
				<Div_Label>
					<label htmlFor="password"> Senha</label>
					<Input 
					id='password'
					name='password' 
					label='password'
					onChange={onChange} 
					value={values.password} 
					/>
				</Div_Label>
				<Wrapper_Button>
					<button onClick={handleLogin}>Entrar</button>
				</Wrapper_Button>
			</form>
			</Div_Input>
			</Wrap_Dir>
		</Wrapper>
		)
                        
}

export default Landing;