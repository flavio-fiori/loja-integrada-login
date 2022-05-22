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
			<S.Container data-testid="input">
				{label && (
					<S.Label htmlFor={id} data-testid="input-label">
						{label}
					</S.Label>
				)}
				<S.Input
					data-testid="input-field"
					aria-invalid={!!error}
					name={id}
					id={id}
					type={type}
					ref={ref}
					{...rest}
				/>
				{error && (
					<S.Error role="alert" data-testid="input-error">
						{error}
					</S.Error>
				)}
			</S.Container>
		);
	},
);

export default Input;
