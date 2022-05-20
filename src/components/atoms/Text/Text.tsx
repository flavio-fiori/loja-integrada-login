import { ReactNode } from 'react'
import * as S from './Text.styles'

interface TextProps {
  children: ReactNode;
}

export default function Text({ children }: TextProps) {
  return (
    <S.Text>{children}</S.Text>
  )
}