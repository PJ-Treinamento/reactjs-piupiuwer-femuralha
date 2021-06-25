import React, { FormEvent, useState, useContext} from 'react';
import Input from '../../components/input/index';
import { Wrapper, Wrap_Esq, Wrap_Dir, Div_Input, Div_Label, Wrapper_Button, Logo, Logo_gigante } from './styles';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';
import { Link, Redirect } from 'react-router-dom';

function Register() {

	const {setUserData} = useContext(AuthContext);
	const [values, setValues] = useState<{ user: string, password: string,username: string, photo: string,first_name: string,last_name: string, about: string}>({ user: '', password: '', username: '', photo:'',first_name:'', last_name:'', about:'' })

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target;
		setValues({
			...values,
			[name]: value,
		})

	}

	const handleReg = async (event: FormEvent) => {
		event.preventDefault()
		const response = await api.post('/register', { email: values.user, password: values.password, username:values.username, photo: values.photo, first_name:values.first_name, last_name:values.last_name, about: values.about })
		const { User } = response.data
		window.location.reload()
	};

	return (
		<Wrapper>
			<Wrap_Esq/>
			<Wrap_Dir>
				<Div_Input>
					<h1>Registro</h1>
					<Logo/>
					<form >
						<Div_Label>
							<label htmlFor="User"> Email</label>
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
						<Div_Label>
							<label htmlFor="Username"> Username</label>
							<Input
								id='username'
								name='username'
								label='Username'
								onChange={onChange}
								value={values.username}
							/>
						</Div_Label>
						<Div_Label>
							<label htmlFor="first_name"> First Name</label>
							<Input
								id='first_name'
								name='first_name'
								label='first_name'
								onChange={onChange}
								value={values.first_name}
							/>
						</Div_Label>
						<Div_Label>
							<label htmlFor="last_name"> Last Name</label>
							<Input
								id='last_name'
								name='last_name'
								label='last_name'
								onChange={onChange}
								value={values.last_name}
							/>
						</Div_Label>
						<Div_Label>
							<label htmlFor="photo"> Photo URL</label>
							<Input
								id='photo'
								name='photo'
								label='photo'
								onChange={onChange}
								value={values.photo}
							/>
						</Div_Label>
						<Div_Label>
							<label htmlFor="about"> About</label>
							<Input
								id='about'
								name='about'
								label='about'
								onChange={onChange}
								value={values.about}
							/>
						</Div_Label>
						<Wrapper_Button>
							<button  onClick={handleReg}>Registrar</button>
						</Wrapper_Button>
					</form>
				</Div_Input>
			</Wrap_Dir>
		</Wrapper>
	)

}

export default Register