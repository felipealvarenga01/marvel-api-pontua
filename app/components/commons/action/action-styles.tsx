import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const ActionView = styled.div<{
  open: boolean
}>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: auto;
  height: ${({ theme }) => theme.size.semiX}px;
  transition: all .2s;

  ${({ theme, open }) =>
    open
    ? `
        border-radius: ${theme.borderRadius.large}px ${theme.borderRadius.large}px 0px 0px;
      `
    : `
        border-radius: ${theme.borderRadius.large}px ${theme.borderRadius.large}px;
      `
  }

  background-color: ${({ theme }) => theme.color.gray200};

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const LabelView = styled.div<{
  open: boolean
}>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => `0px ${theme.spacing.small}px`};
  color: ${({ theme }) => theme.color.gray600};

  & > span {
    font-size: ${({ theme }) => theme.b12_12_600.fontSize}px;
    font-weight: ${({ theme }) => theme.b12_12_600.fontWeight};
    line-height: ${({ theme }) => theme.b12_12_600.lineHeight};
    letter-spacing: ${({ theme }) => theme.b12_12_600.letterSpacing}em;
  }

  & > i {
    font-size: ${({ theme }) => theme.size.small}px;
    transition: all .4s;

    rotate: ${({ open }) => open ? '180deg' : '0deg'};
  }
`;

export const OptionsView = styled( motion.div )`
  position: absolute;
  z-index: 1;
  top: ${({ theme }) => theme.size.semiX}px;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 0px 0px ${({ theme }) => theme.borderRadius.large}px ${({ theme }) => theme.borderRadius.large}px;

  & > span {
    cursor: pointer;
    width: 100%;
    text-align: center;
    padding: ${({ theme }) => `${theme.spacing.tiny}px 0px`};
    font-size: ${({ theme }) => theme.b12_12_500.fontSize}px;
    font-weight: ${({ theme }) => theme.b12_12_500.fontWeight};
    line-height: ${({ theme }) => theme.b12_12_500.lineHeight};
    letter-spacing: ${({ theme }) => theme.b12_12_500.letterSpacing}em;
    background-color: ${({ theme }) => theme.color.gray200};
    transition: all .4s;
  }

  & > span:hover {
    background-color: ${({ theme }) => theme.color.gray300};
  }
`;