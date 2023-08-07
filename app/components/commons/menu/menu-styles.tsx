import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const SidebarLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${({ theme }) => theme.size.medium}px;
  padding: ${({ theme }) => `${theme.spacing.none}px ${theme.spacing.small}px`};
  color: ${({ theme }) => theme.color.gray500};
  transition-duration: 300ms;

  & > div > i {
    font-size: ${({ theme }) => theme.size.standard}px;
  }
  & > div > svg {
    width: 20px;
      height: 20px;
  }

  &.active span {
    color: ${({ theme }) => theme.color.orange500};
  }

  &.active > div {
    background-color: ${({ theme }) => theme.color.graybackground};
  }
  &.active svg {
    stroke: ${({ theme }) => theme.color.orange500};
  }
`;

export const Hover = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.none}px ${theme.spacing.small}px`};
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xLarge}px;
  transition-duration: 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.graybackground};
  }
`;

export const HoverSubMenu = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xLarge}px;
  transition-duration: 300ms;
  padding-left: ${({ theme }) => theme.spacing.small}px;
  padding-right: ${({ theme, open }) =>
    open ? theme.spacing.none : theme.spacing.small}px;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryLight};
  }
`;

export const SidebarLabel = styled(motion.span)`
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.39px;
  color: ${({ theme }) => theme.color.black};
  white-space: nowrap;
  margin-left: ${({ theme }) => theme.spacing.tiny}px;
`;

export const ItemMenuContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition-duration: 200ms;
`;

export const ItemMenu = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconChevronContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  & > i {
    rotate: ${({ subNav }: { subNav: boolean }) =>
      subNav ? '180deg' : '0deg'};
    transition-duration: 200ms;
  }
`;

export const SubMenuList = styled(motion.ul)`
  position: ${({ open }: { open: boolean }) =>
    !open ? 'absolute' : 'initial'};
  background: ${({ subnav, open }: { subnav: boolean; open: boolean }) =>
    subnav && !open ? '#fff' : 'initial'};
  left: ${({ open }: { open: boolean }) => (!open ? '74px' : 'initial')};
  width: ${({ open }: { open: boolean }) => (!open ? 'auto' : '100%')};
  border-radius: ${({ subnav, open }: { subnav: boolean; open: boolean }) =>
    subnav && !open ? '10px' : 'initial'};
  overflow: hidden;
  padding: ${({ theme, open }) =>
    `${open ? theme.spacing.none : theme.spacing.small}px ${
      theme.spacing.none
    }`};
`;

export const SubMenuListItem = styled.li<{ open: boolean }>`
  display: flex;
  width: 100%;
  height: ${({ theme }) => theme.size.semiX}px;
  padding: ${({ theme, open }) =>
    `${theme.spacing.none}px ${
      open ? theme.spacing.standard : theme.spacing.small
    }px`};
`;

export const SubMenuListLink = styled(NavLink)`
  display: flex;
  width: 100%;
  align-items: center;

  & > div > div {
    width: ${({ theme }) => theme.size.micro}px;
    height: ${({ theme }) => theme.size.micro}px;
    border-radius: ${({ theme }) => theme.borderRadius.medium}px;
    background-color: ${({ theme }) => theme.color.gray600};
    margin-right: ${({ theme }) => theme.spacing.small}px;
  }

  &.active div {
    background-color: ${({ theme }) => theme.color.primary};
  }

  &.active span {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const SubmenuItemLabel = styled.span`
  color: ${({ theme }) => theme.color.gray600};
  flex: 1;
  white-space: nowrap;
`;
