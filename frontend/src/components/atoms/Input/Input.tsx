import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label?: string;
	error?: string;
	type?: string;
	ref?: any;
}

const Input: React.FC<InputProps> = forwardRef(
	({ id, label, type, error, ...rest }, ref) => {
		return (
			<S.Container>
				{label && <S.Label htmlFor={id}>{label}</S.Label>}
				<S.Input
					aria-invalid={!!error}
					name={id}
					id={id}
					type={type}
					ref={ref}
					{...rest}
				/>
				{error && <S.Error role="alert">{error}</S.Error>}
			</S.Container>
		);
	},
);

export default Input;
