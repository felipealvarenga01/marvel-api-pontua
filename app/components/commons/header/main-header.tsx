import { Header } from './header-styles';

type User = {
  logo: string;
  nome: string;
};

type MainHeaderProps = {
  user?: User;
  children?: React.ReactElement;
};

export const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return <Header>{children}</Header>;
};
