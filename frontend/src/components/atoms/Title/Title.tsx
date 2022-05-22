import { ReactNode } from 'react';
import * as S from './Title.styles';

interface TitleProps {
	children: ReactNode;
}

export default function Title({ children }: TitleProps) {
	if (!children) {
		return <></>;
	}
	return <S.Title data-testid="title">{children}</S.Title>;
}
