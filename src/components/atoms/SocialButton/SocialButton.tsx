import { ReactNode } from "react";
import * as S from './SocialButton.styles'

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <S.Button>{children}</S.Button>
  )
}