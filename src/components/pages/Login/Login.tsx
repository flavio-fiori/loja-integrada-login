import * as S from './Login.styles'
import Form from '../../organisms/Form';
import ContentSocial from '../../organisms/ContentSocial';

export default function Login() {
  return (
    <S.Container>
      <S.Background />
      <S.Main role="main">
        <S.Info>
          <Form />
          <ContentSocial />        
        </S.Info>
      </S.Main>
    </S.Container>
  )
}