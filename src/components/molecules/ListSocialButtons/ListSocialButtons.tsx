import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import SocialButton from '../../atoms/SocialButton';
import * as S from './ListSocialButtons.styles'

export default function ListSocialButtons() {
  return(
    <S.Container>
      <SocialButton><FaFacebookF /></SocialButton>
        <SocialButton><FaTwitter /></SocialButton>
    </S.Container>
  )
}