import { useDeviceDetect } from '~/hooks/use-device-detect';

const RenderWithMobileStyles = ({ children }: React.PropsWithChildren) => {
  const { isMobile } = useDeviceDetect();
  
  if (isMobile) {
    return <>{children}</>;
  }
  
  return <div>{children}</div>;
};

export { RenderWithMobileStyles };
