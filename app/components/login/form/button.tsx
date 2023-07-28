import { Button, IconButton } from '~/components/login/styles';

type ButtonLoginProps = {
  icon?: string;
  disabled?: boolean;
};

export function ButtonLogin({
  children,
  icon,
  disabled,
}: React.PropsWithChildren<ButtonLoginProps>) {
  return (
    <Button icon={icon} disabled={disabled}>
      <span>{children}</span>
      {icon && <IconButton src={icon} alt="entrar" />}
    </Button>
  );
}
