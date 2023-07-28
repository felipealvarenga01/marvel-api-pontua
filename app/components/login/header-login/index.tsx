import { HeaderLoginContainer, ImgLogo } from '~/components/login/styles';
import logo from '../../../assets/logo_pontua_white.svg';

export default function HeaderLogin() {
  return (
    <HeaderLoginContainer>
      <ImgLogo src={logo} />
    </HeaderLoginContainer>
  );
}
