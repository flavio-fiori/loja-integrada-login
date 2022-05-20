import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

interface IFormInputs {
  user: string;
  password: string;
}

const schema = yup.object().shape({
  user: yup.string().email('invalid user').required('mandatory user'),
  password: yup.string().required('mandatory password'),
});

export default function Form() {

  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  function onSubmit(data: IFormInputs) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="User"
        error={errors.user?.message}   
        {...register('user')}            
        />
      <Input
        type="password"
        label="Password"
        error={errors.password?.message}
        {...register('password')}     
      />
      <Button type="submit">Login</Button>
    </form>
  );
}