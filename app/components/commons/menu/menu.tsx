import { useTheme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import type { IconName } from '~/components/commons/icons/icons-config';
import {
  Hover,
  ItemMenu,
  ItemMenuContainer,
  SidebarLabel,
  SidebarLink,
} from '~/components/commons/menu/menu-styles';
import { Icon } from '~/components/commons/sidebar/sidebar-styles';

export type MenuProperties = {
  item: ListMenuProperties;
};

export type ListMenuProperties = {
  title: string;
  path: string;
  icon: IconName;
};

export default function Menu({ item }: MenuProperties) {
  const theme = useTheme();

  return (
    <>
      <ItemMenu>
        <SidebarLink to={item.path} className="menu-link">
          <Hover>
            <Icon iconName={item.icon} theme={theme} />

            <ItemMenuContainer>
              <AnimatePresence>
                <SidebarLabel
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  animate={{
                    width: 'auto',
                    opacity: 1,
                  }}
                  exit={{
                    width: 0,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </SidebarLabel>
              </AnimatePresence>
            </ItemMenuContainer>
          </Hover>
        </SidebarLink>
      </ItemMenu>
    </>
  );
}
