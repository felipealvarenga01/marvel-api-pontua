import { Button, IconButton } from '~/components/login/styles';

type ButtonLoginProps = {
  icon?: string;
  disabled?: boolean;
  marginTop?: number;
};

export function ButtonLogin({
  children,
  icon,
  disabled,
  marginTop,
}: React.PropsWithChildren<ButtonLoginProps>) {
  return (
    <Button icon={icon} disabled={disabled} marginTop={marginTop}>
      <span>{children}</span>
      {icon && <IconButton src={icon} alt="entrar" />}
    </Button>
  );
}
