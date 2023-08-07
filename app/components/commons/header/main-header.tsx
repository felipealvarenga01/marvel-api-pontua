import { Header, LeftRow, RightRow } from './header-styles';

type User = {
  logo: string;
  nome: string;
};

type MainHeaderProps = {
  user?: User;
};

export const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <Header>
      <LeftRow>teste</LeftRow>
      <RightRow>teste</RightRow>
    </Header>
  );
};
