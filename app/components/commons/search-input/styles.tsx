import styled from '@emotion/styled';

export const SearchInputView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  border-radius: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.gray500};

  & > svg {
    font-size: 15px;
    margin-right: 16px;
    color: ${({ theme }) => theme.color.blue200};
  }

  & > input {
    height: 40px;
    padding-left: 0;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.blue600};
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.36px;
  }

  & > input::placeholder {
    color: ${({ theme }) => theme.color.blue200};
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.24px;
  }
`;
