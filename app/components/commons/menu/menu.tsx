import { useTheme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { IconName } from '~/components/commons/icons/icons-config';
import {
  Hover,
  HoverSubMenu,
  IconChevronContainer,
  ItemMenu,
  ItemMenuContainer,
  SidebarLabel,
  SidebarLink,
  SubMenuList,
  SubMenuListItem,
  SubMenuListLink,
  SubmenuItemLabel,
} from '~/components/commons/menu/menu-styles';
import { Icon } from '~/components/commons/sidebar/sidebar-styles';

export type SubMenuProperties = {
  item: ListMenuProperties;
  open: boolean;
};

export type ListMenuProperties = {
  title: string;
  path: string;
  iconClosed?: IconName;
  iconOpened?: IconName;
  icon: IconName;
  subMenu?: Array<ListSubMenuProperties>;
};

export type ListSubMenuProperties = {
  title: string;
  path: string;
};

export default function Menu({ item, open }: SubMenuProperties) {
  const [subnav, setSubnav] = useState(open);
  const theme = useTheme();

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <ItemMenu>
        <SidebarLink
          to={item.path}
          onClick={item.subMenu && showSubnav}
          className="menu-link"
          open={open}
        >
          <Hover>
            <Icon
              iconType="duotone"
              iconName={item.icon || 'blackLeft'}
              theme={theme}
            />

            <ItemMenuContainer>
              <AnimatePresence>
                {open && (
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
                )}
              </AnimatePresence>

              <IconChevronContainer
                subNav={Boolean(item.subMenu) && Boolean(subnav)}
              >
                {item.iconClosed && open && (
                  <Icon
                    iconType="duotone"
                    iconName={item.iconClosed}
                    theme={theme}
                  />
                )}
              </IconChevronContainer>
            </ItemMenuContainer>
          </Hover>
        </SidebarLink>

        <AnimatePresence>
          {subnav && item.subMenu && (
            <SubMenuList
              subnav={subnav}
              open={open}
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {subnav &&
                item.subMenu?.map((itemSubMenu, index) => {
                  return (
                    <SubMenuListItem
                      key={index}
                      onClick={item.subMenu && showSubnav}
                      open={open}
                    >
                      <SubMenuListLink to={itemSubMenu.path} key={index}>
                        <HoverSubMenu open={open}>
                          <div />
                          <SubmenuItemLabel>
                            {itemSubMenu.title}
                          </SubmenuItemLabel>
                        </HoverSubMenu>
                      </SubMenuListLink>
                    </SubMenuListItem>
                  );
                })}
            </SubMenuList>
          )}
        </AnimatePresence>
      </ItemMenu>
    </>
  );
}
