import Text from '../../atoms/Text';
import ListSocialButtons from '../../molecules/ListSocialButtons';

import * as S from './ContentSocial.styles';

export default function ContentSocial() {
	return (
		<S.Container>
			<Text>ou cadastre-se usando:</Text>
			<ListSocialButtons />
		</S.Container>
	);
}
