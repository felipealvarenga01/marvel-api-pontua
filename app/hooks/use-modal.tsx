import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';

type ChildrenType = ReactNode | null;
type OpenModalProps = {
  hasPadding?: boolean;
  canCloseBackdrop?: boolean;
  children: ChildrenType;
};

interface ModalContextProps {
  isVisible: boolean;
  open: (data: OpenModalProps) => void;
  close: () => void;
  children: React.ReactNode | null;
  hasPadding: boolean;
  canCloseBackdrop: boolean;
}

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children: providerChildren }: OpenModalProps) => {
  const [currentChildren, setCurrentChildren] = useState<ChildrenType | null>(
    null,
  );
  const [currentHasPadding, setCurrentHasPadding] = useState(true);
  const [currentCanCloseBackdrop, setCurrentCanCloseBackdrop] = useState(true);
  
  function close() {
    setCurrentChildren(null);
  }
  
  function open({
                  hasPadding = true,
                  children,
                  canCloseBackdrop = true,
                }: OpenModalProps) {
    setCurrentChildren(children);
    setCurrentHasPadding(hasPadding);
    setCurrentCanCloseBackdrop(canCloseBackdrop);
  }
  
  return (
    <ModalContext.Provider
      value={{
        isVisible: Boolean(currentChildren),
        open,
        close,
        children: currentChildren,
        hasPadding: currentHasPadding,
        canCloseBackdrop: currentCanCloseBackdrop,
      }}
    >
      {providerChildren}
    </ModalContext.Provider>
  );
};

function useModal() {
  return useContext(ModalContext);
}

export { useModal, ModalProvider };
