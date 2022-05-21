import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import Checkbox from '../../atoms/Checkbox';

interface IFormInputs {
	user: string;
	password: string;
	remember: boolean;
}

const schema = yup.object().shape({
	user: yup
		.string()
		.email('usuário inválido')
		.required('campo usuário obrigatório'),
	password: yup.string().required('campo senha obrigatório'),
});

export default function Form() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});

	function onSubmit(data: IFormInputs) {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Title>Faça login para continuar</Title>
			<fieldset>
				<Input
					label="Usuário"
					placeholder="Digite seu usuário"
					id="user"
					type="text"
					error={errors.user?.message}
					{...register('user')}
				/>

				<Input
					label="Senha"
					placeholder="Digite sua senha"
					id="password"
					type="password"
					error={errors.password?.message}
					{...register('password')}
				/>

				<Checkbox label="Lembrar-me" id="remember" {...register('remember')} />

				<Button type="submit">Entrar</Button>
			</fieldset>
		</form>
	);
}
