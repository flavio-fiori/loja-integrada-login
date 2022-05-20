import { ReactNode, ButtonHTMLAttributes } from "react";
import * as S from './Button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <S.Button>{children}</S.Button>
  )
}