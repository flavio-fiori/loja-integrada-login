import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  type?: string;
  ref?: any;
}

const Input: React.FC<InputProps> = forwardRef(({ name, label, type, error, ...rest }, ref) => {
  return (
    <S.Container>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input name={name} type={type} ref={ref} {...rest} />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
})

export default Input;
