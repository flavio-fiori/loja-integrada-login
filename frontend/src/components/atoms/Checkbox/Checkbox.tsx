import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from './Checkbox.styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	ref?: any;
}

const Checkbox: React.FC<CheckboxProps> = forwardRef(
	({ id, label, ...rest }, ref) => {
		return (
			<S.Container htmlFor={id}>
				<S.Checkbox type="checkbox" id={id} ref={ref} {...rest} />
				<span></span>
				{label}
			</S.Container>
		);
	},
);

export default Checkbox;
