import { useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { ButtonLogin } from '~/components/login/form/button';
import { ForgotPassword } from '~/components/login/form/forgot-password';
import { InputField } from '~/components/login/form/input';
import {
  CardContainer,
  CardLogin,
  DescriptionCardLogin,
  Dialog,
  Form,
  TitleCardLogin,
} from '~/components/login/styles';
import { ClientRequestBuilder } from '~/server/infra/request-builder';

type InputsProps = {
  type: string;
  placeholder: string;
  icon?: string;
  marginbottom?: number;
  name: string;
};
type FormLoginProps = {
  inputs?: Array<InputsProps>;
  title: {
    title: string;
    dot: string;
  };
  description: string;
  forgotLink?: boolean;
  button: {
    icon?: string;
    title: string;
    disabled?: boolean;
    marginTop?: number;
  };
};

const windowRef = typeof window !== 'undefined' ? window : null;

export default function FormLogin({
  inputs,
  title,
  description,
  forgotLink,
  button,
}: FormLoginProps) {
  const [inputValues, setInputValues] = useState<{
    name: string;
    value: string;
  }>();
  const [inputData, setInputData] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >();
  const [messageLogin, setMessageLogin] = useState<string | undefined>();
  const navigate = useNavigate();

  async function validateLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validateEmail = inputData?.find(
      (item) => item.name === 'email',
    )?.value;
    const validatePassword = inputData?.find(
      (item) => item.name === 'password',
    )?.value;

    if (!validateEmail || !validatePassword) {
      setMessageLogin('Insira email e senha para continuar');

      return;
    }

    const { token, message } = await new ClientRequestBuilder<{
      token?: string;
      message?: string;
    }>({
      baseUrl: '/api/authentication',
    })
      .withMethod('POST')
      // @ts-ignore
      .withBody({ data: inputData })
      .call();

    if (message) {
      setMessageLogin(message);

      return;
    }
    if (token) {
      windowRef?.localStorage.setItem('token', token);
    }
    navigate('/agent-selection');

    return;
  }

  useEffect(() => {
    const data = [];
    if (inputValues) {
      data.push(inputValues);
      const filterData = inputData?.find(
        (item) => item.name !== inputValues.name,
      );
      if (filterData) {
        data.push(filterData);
      }
      setInputData(data);
    }
  }, [inputValues]);

  return (
    <CardContainer>
      <CardLogin>
        <TitleCardLogin>
          {title.title}
          <span>{title.dot}</span>
        </TitleCardLogin>
        <DescriptionCardLogin>{description}</DescriptionCardLogin>
        {messageLogin && <Dialog>{messageLogin}</Dialog>}
        <Form
          onSubmit={(e) => validateLogin(e)}
          onClick={() => setMessageLogin(undefined)}
        >
          {inputs &&
            inputs.map((input, index) => (
              <InputField
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                icon={input?.icon}
                marginbottom={input?.marginbottom}
                labelName={input?.name}
                value={(data) => setInputValues(data)}
              />
            ))}
          <ButtonLogin
            icon={button.icon}
            disabled={button.disabled}
            marginTop={button.marginTop}
          >
            {button.title}
          </ButtonLogin>
          {forgotLink && <ForgotPassword />}
        </Form>
      </CardLogin>
    </CardContainer>
  );
}
