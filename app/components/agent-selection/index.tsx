import { useNavigate } from '@remix-run/react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import ButtonAgentSelection from '~/components/agent-selection/button';
import Select from '~/components/agent-selection/select';
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
  options: OptionsData[];
};

type OptionsData = {
  id: string;
  name: string;
  thumbnail: string;
};

export default function FormAgent({
  title,
  description,
  options = [],
}: FormLoginProps) {
  const navigate = useNavigate();
  const [agentSelectedId, setAgentSelectedId] = useState<number>();

  function alguma(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (agentSelectedId) {
      navigate(`/perfil?agentId=${agentSelectedId}`);
    }
  }

  return (
    <CardContainer>
      <CardLogin height={319}>
        <TitleCardLogin>
          {title}
          <span>.</span>
        </TitleCardLogin>
        <DescriptionCardLogin marginTop={16} marginBottom={9}>
          {description}
        </DescriptionCardLogin>
        <Form onSubmit={(e) => alguma(e)}>
          <Select
            options={options}
            agent={(agent) => setAgentSelectedId(agent)}
          />
          <ButtonAgentSelection title={'Entrar'} />
        </Form>
      </CardLogin>
    </CardContainer>
  );
}
