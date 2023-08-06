import { Button, ButtonAgent } from '~/components/login/styles';

export default function ButtonAgentSelection({ title }: { title: string }) {
  return (
    <ButtonAgent>
      {' '}
      <Button>{title}</Button>
    </ButtonAgent>
  );
}
