import {useNavigate} from '@remix-run/react';
import {useTranslation} from '~/hooks/i18n';
import {useDeviceDetect} from '~/hooks/use-device-detect';

export function ScreenError() {
  const {translate} = useTranslation();
  const navigate = useNavigate();
  const {isMobile} = useDeviceDetect();
  
  const tryAgain = () => {
    window.location.reload();
  };
  
  const goToHome = () => {
    navigate('/', {replace: true});
  };
  
  return (
    <></>
  );
}
