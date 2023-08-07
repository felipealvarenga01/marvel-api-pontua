import {useState} from "react";
import {Icon, Nav, NavBackground, NavContainer, NavIcon, SidebarNav, SidebarWrap} from './sidebar-styles'
import { useDeviceDetect } from '~/hooks/use-device-detect';
import {Logo} from "~/components/commons/logo/logo";
import Menu from "~/components/commons/menu/menu";
import {IconName} from "~/components/commons/icons/icons-config";
import {useTheme} from "@emotion/react";

export type ListSubMenuProperties = {
  title: string,
  path: string
}

export type ListMenuProperties = {
  title: string,
  path: string,
  iconClosed?: IconName,
  iconOpened?: IconName,
  icon: IconName,
  subMenu?: Array<ListSubMenuProperties>
}

export const Sidebar = ({menuList}: {menuList: []}) => {
  const { isMobile } = useDeviceDetect();
  const [menus] = useState<Array<ListMenuProperties>>(menuList);
  const [open, setOpen] = useState<boolean>(false)
  const theme = useTheme()
  
  return (
    <NavContainer>
      <NavBackground open={open}>
        <Nav open={open}>
          <Logo open={open}/>
          <NavIcon open={open} to='#' onClick={()=> setOpen(!open)}>
            <Icon
              iconType='duotone'
              iconName='blackRightLine'
            />
          </NavIcon>
        </Nav>
        
        <SidebarNav>
          <SidebarWrap className='menuList' open={open}>
            {menus.map((item:ListMenuProperties, index: number) => {
              return <Menu item={item} open={open} key={index}/>
            })}
          </SidebarWrap>
        </SidebarNav>
      </NavBackground>
    
    </NavContainer>
  );
};
