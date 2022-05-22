import { ReactNode } from 'react';
import * as S from './Text.styles';

interface TextProps {
	children: ReactNode;
}

export default function Text({ children }: TextProps) {
	if (!children) {
		return <></>;
	}
	return <S.Text data-testid="text">{children}</S.Text>;
}
