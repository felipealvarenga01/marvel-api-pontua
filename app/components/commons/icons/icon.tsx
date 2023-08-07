import React, { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import type { IconName } from './icons-config';

type Props = {
  className?: string;
  iconName: IconName;
};

const KTIcon: React.FC<Props> = ({ iconName }) => {
  const [icon, setIcon] = useState<any>();

  useEffect(() => {
    switch (iconName) {
      case 'user':
        setIcon(<FiUser size={16} />);
        break;

      case 'dashboard':
        setIcon(
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2008_165)">
              <path
                d="M3.5 10.1333C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333H3.5ZM3.5 16.8C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8H3.5ZM11.8333 16.8C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8H11.8333ZM11.5333 3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5V3.5Z"
                stroke="black"
                strokeWidth="1.4"
              />
            </g>
            <defs>
              <clipPath id="clip0_2008_165">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>,
        );
        break;

      case 'logout':
        setIcon(
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49992 9.66659L1.33325 5.49992M1.33325 5.49992L5.49992 1.33325M1.33325 5.49992H11.3333C12.2173 5.49992 13.0652 5.85111 13.6903 6.47623C14.3154 7.10135 14.6666 7.9492 14.6666 8.83325V14.6666"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        );
        break;
    }
  }, []);

  return <>{icon}</>;
};

export { KTIcon };
