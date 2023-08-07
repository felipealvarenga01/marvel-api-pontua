import styled from '@emotion/styled';
import { mq } from '~/hooks/use-theme';
import {Link} from "react-router-dom";
import {KTIcon} from "~/components/commons/icons/icon";

export const Header = styled.div`
  height: ${({ theme }) => '60'}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${() =>
  mq({
    justifyContent: ['center', 'space-between'],
  })}
`;

export const Nav = styled.div<{
  open: boolean
}>`
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  transition-duration: 300ms;
  height: ${({ theme }) => theme.size.largeX}px;
  box-shadow: -1px 1px 4px #ebeff2;
  padding: ${({ theme, open }) => `${theme.spacing.standard}px ${open ? theme.spacing.standard : theme.spacing.small}px`};
`

export const NavIcon = styled(Link)<{
  open: boolean
}>`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.gray500};
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  position: absolute;
  right: -${({ theme }) => theme.spacing.small}px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.elevation.intense};
  padding: ${({ theme }) => theme.spacing.micro}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;
  
  & > i {
    transition: all .2s;
    rotate: ${({ open }) => open ? '180' : '0'}deg;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
  }
`

export const SidebarNav = styled.nav`
  display: flex;
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing.tiny}px;
`

export const SidebarWrap = styled.ul<{
  open: boolean
}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  transition-duration: 300ms;
`

export const NavContainer = styled.nav`
  display: flex;
  height: 100%;
  box-shadow: 6px 0 18px rgba(0, 0, 0, 0.06);
`

export const NavBackground = styled.div`
  position: relative;
  background-color: #ffffff;
  transition-duration: 300ms;
  height: 100%;
  display: flex;
  width: ${({open}: { open: boolean }) => open ? '270px' : '72px'};
  flex-direction: column;

`

export const Icon = styled(KTIcon) `
  font-size: ${({theme}) => theme.size.standard}px;
`