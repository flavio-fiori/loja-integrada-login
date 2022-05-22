import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as S from './SocialButton.styles';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
	if (!children) {
		return <></>;
	}
	return <S.Button data-testid="social-button">{children}</S.Button>;
}
