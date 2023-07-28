import { ButtonLogin } from '~/components/login/form/button';
import { ForgotPassword } from '~/components/login/form/forgot-password';
import { InputField } from '~/components/login/form/input';
import {
  CardContainer,
  CardLogin,
  DescriptionCardLogin,
  Form,
  TitleCardLogin,
} from '~/components/login/styles';
import entrar from '../../../assets/entrar.svg';
import passwordIcon from '../../../assets/password.svg';
import userIcon from '../../../assets/user.svg';

export default function FormLogin() {
  return (
    <CardContainer>
      <CardLogin>
        <TitleCardLogin>
          Bem-Vindo<span>.</span>
        </TitleCardLogin>
        <DescriptionCardLogin>
          Informe as suas credenciais de acesso ao portal
        </DescriptionCardLogin>
        <Form>
          <InputField
            type={'email'}
            placeholder={'Seu melhor e-mail'}
            icon={userIcon}
            marginbottom={23}
          />
          <InputField
            type={'password'}
            placeholder={'Informe sua senha'}
            icon={passwordIcon}
            marginbottom={11}
          />
          <ButtonLogin icon={entrar} children="entrar" />
          <ForgotPassword />
        </Form>
      </CardLogin>
    </CardContainer>
  );
}
