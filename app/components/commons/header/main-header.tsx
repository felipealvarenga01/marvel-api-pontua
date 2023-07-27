import { useDeviceDetect } from '~/hooks/use-device-detect';
import { Header } from './header-styles';

type User = {
  logo: string;
  nome: string;
};

type MainHeaderProps = {
  user?: User;
};

export const MainHeader: React.FC<MainHeaderProps> = () => {
  const { isMobile } = useDeviceDetect();

  return <Header />;
};
