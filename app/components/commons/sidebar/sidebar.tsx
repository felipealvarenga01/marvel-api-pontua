import { useState } from 'react';
import type { IconName } from '~/components/commons/icons/icons-config';
import { Logo } from '~/components/commons/logo/logo';
import Menu from '~/components/commons/menu/menu';
import {
  DividerSidebar,
  NavBackground,
  NavContainer,
  SidebarNav,
  SidebarWrap,
} from './sidebar-styles';

export type ListMenuProperties = {
  title: string;
  path: string;
  icon: IconName;
};

export const Sidebar = ({ menuList }: { menuList: ListMenuProperties[] }) => {
  const [menus] = useState<ListMenuProperties[]>(menuList);

  return (
    <NavContainer>
      <NavBackground>
        <Logo open />
        <SidebarNav>
          <SidebarWrap className="menuList">
            {menus.map((item: ListMenuProperties, index: number) => {
              return <Menu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        <DividerSidebar />
        <SidebarNav>
          <SidebarWrap className="menuList">
            <Menu
              item={{
                icon: 'logout',
                path: '/logout',
                title: 'Sair',
              }}
            />
          </SidebarWrap>
        </SidebarNav>
      </NavBackground>
    </NavContainer>
  );
};
