import FormLogin from '~/components/login/form';
import HeaderLogin from '~/components/login/header-login';
import ImgLogin from '~/components/login/img-main';
import { LoginBackground, LoginContainer } from '~/components/login/styles';

export default function Login() {
  // const { translate } = useTranslation('pages.login');
  //<h1>{translate('subtitle')}</h1>

  return (
    <LoginBackground>
      <HeaderLogin />
      <LoginContainer>
        <ImgLogin />
        <FormLogin />
      </LoginContainer>
    </LoginBackground>
  );
}
