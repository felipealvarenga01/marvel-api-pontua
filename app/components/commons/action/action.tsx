import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { KTIcon } from '../icons/icon';
import { OutsideClick } from '../outside-click/outside-click';
import { ActionView, LabelView, OptionsView } from './action-styles';

type Option = {
  label: string;
  action?: () => void;
};

export interface ActionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  options: Array<Option>;
}

export const Action: React.FC<ActionProps> = ({ label, options, ...rest }) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    setOpenOptions((value) => !value);
  };

  return (
    <OutsideClick callback={() => setOpenOptions(false)}>
      <ActionView open={openOptions} {...rest}>
        <LabelView onClick={handleClick} open={openOptions}>
          <span>{label}</span>

          <KTIcon iconType="solid" iconName="down" />
        </LabelView>

        <AnimatePresence>
          {openOptions && (
            <OptionsView
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {options.map(({ label, action = () => {} }) => (
                <span
                  key={label}
                  onClick={(
                    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                  ) => {
                    e.stopPropagation();

                    action();

                    setOpenOptions(false);
                  }}
                >
                  {label}
                </span>
              ))}
            </OptionsView>
          )}
        </AnimatePresence>
      </ActionView>
    </OutsideClick>
  );
};
