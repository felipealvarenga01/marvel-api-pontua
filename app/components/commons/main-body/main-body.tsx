import { Outlet } from '@remix-run/react';
import { useDeviceDetect } from '~/hooks/use-device-detect';
import { Main } from './main-body-styles';

export function MainBody() {
  const { isMobile } = useDeviceDetect();

  return (
    <Main>
      <Outlet />
    </Main>
  );
}
