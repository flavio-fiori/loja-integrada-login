import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import SocialButton from '../../atoms/SocialButton';
import * as S from './ListSocialButtons.styles'

export default function ListSocialButtons() {
  return(
    <S.Container>
      <SocialButton type="button" title="Entrar com o Facebook">
        <FaFacebookF />
      </SocialButton>
      <SocialButton type="button" title="Entrar com o Twitter">
        <FaTwitter />
      </SocialButton>
    </S.Container>
  )
}