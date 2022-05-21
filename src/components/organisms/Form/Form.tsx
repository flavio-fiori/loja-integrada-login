import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLazyQuery } from '@apollo/client';
import { AiOutlineLoading } from 'react-icons/ai';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import Checkbox from '../../atoms/Checkbox';
import { QUERY_AUTH } from 'graphql/queries/auth';
import useCounter from './../../../hooks/useCounter';
import toast from 'utils/toast';

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

	const [loadGreeting, { loading }] = useLazyQuery(QUERY_AUTH);

	const { counter, sumCounter } = useCounter();

	async function onSubmit(formData: IFormInputs) {
		await loadGreeting({
			variables: {
				email: formData.user,
				password: formData.password,
			},
		})
			.then((response) => {
				const {
					data: { auth },
				} = response;
				if (!auth) {
					sumCounter();
				}

				toast({
					message: 'Login Realizado com sucesso! Aguarde',
					type: 'success',
				});
			})
			.catch((error) => toast({ message: error.message, type: 'error' }));
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

				<Button type="submit" disabled={counter >= 5}>
					{loading ? <AiOutlineLoading /> : 'Entrar'}
				</Button>
			</fieldset>
		</form>
	);
}
