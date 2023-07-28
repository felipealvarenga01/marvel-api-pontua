import { Link } from '@remix-run/react';
import question from '~/assets/interrogacao.svg';
import { ForgotPasswordContainer, IconButton } from '~/components/login/styles';

export function ForgotPassword() {
  return (
    <ForgotPasswordContainer>
      <Link to={'forgot-password'}>
        <IconButton src={question} alt="" />
        <span>Esqueceu a senha?</span>
      </Link>
    </ForgotPasswordContainer>
  );
}
