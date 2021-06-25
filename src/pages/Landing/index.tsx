import React, { FormEvent, useState, useContext} from 'react';
import Input from '../../components/input/index';
import { Wrapper, Wrap_Esq, Wrap_Dir, Div_Input, Div_Label, Wrapper_Button, Logo, Logo_gigante } from './styles';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';
import { Link, Redirect } from 'react-router-dom';

function Landing() {

	const {setUserData} = useContext(AuthContext);
	const [values, setValues] = useState<{ user: string, password: string }>({ user: '', password: '' })

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target;
		setValues({
			...values,
			[name]: value,
		})

	}

	const handleLogin = async (event: FormEvent) => {
		event.preventDefault()
		const response = await api.post('/sessions/login', { email: values.user, password: values.password })
		const { token, user } = response.data
		localStorage.setItem("@PiuPiuwer:token", token)
		localStorage.setItem("@PiuPiuwer:user", JSON.stringify(user))
	  setUserData({token, user})
		window.location.reload()
	};

	return (
		<Wrapper>
			<Wrap_Esq>
				<Logo/>
			</Wrap_Esq>
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
							type='password'
								id='password'
								name='password'
								label='password'
								onChange={onChange}
								value={values.password}
							/>
						</Div_Label>
						<Wrapper_Button>
							<button  onClick={handleLogin}>Entrar</button>
							<button><Link to='/reg'>Registro</Link></button>
						</Wrapper_Button>
					</form>
				</Div_Input>
			</Wrap_Dir>
		</Wrapper>
	)

}

export default Landing