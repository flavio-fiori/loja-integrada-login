import { InputHTMLAttributes } from 'react';
import * as S from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  type?: string;
}

export default function Input({ name, label, error, type = "text", ...rest }: InputProps) {
  return (
    <S.Container>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input name={name} type={type} {...rest} />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}
