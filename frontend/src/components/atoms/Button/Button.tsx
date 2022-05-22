import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
	return <S.Button {...rest}>{children}</S.Button>;
}
