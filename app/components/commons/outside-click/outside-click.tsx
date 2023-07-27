import { useEffect, useRef } from "react";

type Callback = () => void;

interface OutsideClickProps extends React.HTMLAttributes<HTMLDivElement> {
  callback: Callback
}

export const OutsideClick: React.FC<OutsideClickProps> = ({
  callback,
  children,
  ...rest
}) => {
  const useOutsideClick = (callback: Callback) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [callback]);

    return ref;
  };

  const outsideClickViewRef = useOutsideClick(callback);

  return (
    <div
      {...rest}
      ref={outsideClickViewRef}
    >
      {children}
    </div>
  );
};