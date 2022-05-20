import { ReactNode } from 'react'
import * as S from './Title.styles'

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <S.Title>{children}</S.Title>
  )
}