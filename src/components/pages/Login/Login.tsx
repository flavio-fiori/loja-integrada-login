import * as S from './Login.styles'

import Title from '../../atoms/Title'
import Form from '../../organisms/Form';
import ContentSocial from '../../organisms/ContentSocial';

export default function Login() {
  return (
    <S.Main>
      <S.Background />
      <S.Content>
        <S.Info>
          <Title>Login to continue</Title>
          <Form />
          <ContentSocial />        
        </S.Info>
      </S.Content>
    </S.Main>
  )
}