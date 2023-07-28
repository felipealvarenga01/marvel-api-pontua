import { Button, IconButton } from '~/components/login/styles';

type ButtonLoginProps = {
  icon?: string;
};

export function ButtonLogin({
  children,
  icon,
}: React.PropsWithChildren<ButtonLoginProps>) {
  return (
    <Button icon={icon}>
      <span>{children}</span>
      {icon && <IconButton src={icon} alt="entrar" />}
    </Button>
  );
}
