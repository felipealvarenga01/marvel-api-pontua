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

type InputsProps = {
  type: string;
  placeholder: string;
  icon?: string;
  marginbottom?: number;
};
type FormLoginProps = {
  inputs?: Array<InputsProps>;
  title: string;
  description: string;
  forgotLink?: boolean;
  button: {
    icon?: string;
    title: string;
    disabled?: boolean;
  };
};

export default function FormLogin({
  inputs,
  title,
  description,
  forgotLink,
  button,
}: FormLoginProps) {
  return (
    <CardContainer>
      <CardLogin>
        <TitleCardLogin>
          {title}
          <span>.</span>
        </TitleCardLogin>
        <DescriptionCardLogin>{description}</DescriptionCardLogin>
        <Form>
          {inputs &&
            inputs.map((input) => (
              <InputField
                type={input.type}
                placeholder={input.placeholder}
                icon={input?.icon}
                marginbottom={input?.marginbottom}
              />
            ))}
          <ButtonLogin icon={button.icon} children={button.title} disabled={button.disabled}/>
          {forgotLink && <ForgotPassword />}
        </Form>
      </CardLogin>
    </CardContainer>
  );
}
