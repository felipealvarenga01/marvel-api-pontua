import { useMatches } from '@remix-run/react';
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import useIsomorphicLayoutEffect from './use-isophormic-layout-effect';

const MOBILE_BREAKPOINT = 775;

export type DeviceDetect = {
  isMobile: boolean;
  isIOS: boolean;
  isAndroid: boolean;
};

const DeviceDetectContext = createContext<DeviceDetect>({
  isMobile: false,
  isIOS: false,
  isAndroid: false,
});

export function DeviceDetectProvider({ children }: React.PropsWithChildren) {
  const [, { data }] = useMatches();

  const [isMobile, setIsMobile] = useState<boolean>(Boolean(data?.isMobile));
  const isIOS = useRef(
    typeof window !== 'undefined' &&
      /iPad|iPhone|iPod/.test(navigator.userAgent),
  ).current;
  const isAndroid = useRef(
    typeof window !== 'undefined' && /Android/.test(navigator.userAgent),
  ).current;

  const handleResize = useCallback(() => {
    const { innerWidth } = window;

    setIsMobile(innerWidth < MOBILE_BREAKPOINT);
  }, []);

  useIsomorphicLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceDetectContext.Provider value={{ isMobile, isIOS, isAndroid }}>
      {children}
    </DeviceDetectContext.Provider>
  );
}

export function useDeviceDetect(): DeviceDetect {
  return useContext(DeviceDetectContext);
}
