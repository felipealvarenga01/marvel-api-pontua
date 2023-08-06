import ButtonAgentSelection from '~/components/agent-selection/button';
import {
  CardContainer,
  CardLogin,
  DescriptionCardLogin,
  Form,
  TitleCardLogin,
} from '~/components/login/styles';

type FormLoginProps = {
  title: string;
  description: string;
  button: {
    icon?: string;
    title: string;
    disabled?: boolean;
    marginTop?: number;
  };
};

export default function FormAgent({
  title,
  description,
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
          <ButtonAgentSelection title={'Entrar'} button={button}/>
        </Form>
      </CardLogin>
    </CardContainer>
  );
}
