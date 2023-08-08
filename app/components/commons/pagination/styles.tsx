import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const Pagination = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 1px;
  margin-top: 12px;

  font-size: 14px;
  font-family: 'Epilogue', 'Inter', sans-serif;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.color.blue200};

  user-select: none;
  -ms-user-select: none;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.color.gray200};
    background-color: ${({ theme }) => theme.color.white};
    border-left-width: 0;
  }

  li:hover a {
    background-color: ${({ theme }) => theme.color.gray300};
  }

  li > a {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 16px;
  }

  li > a > i {
    font-size: 5px;
  }
  li.previous,
  li.next {
    color: blue;
  }

  li.previous.disable,
  li.next.disable {
    color: gray;
  }

  li.selected {
    color: ${({ theme }) => theme.color.blue600};
    background-color: ${({ theme }) => theme.color.gray300};
  }

  & li:first-of-type {
    width: 118px;
    border-left-width: 1px;
    border-radius: 8px 0px 0px 8px;

    > a > span > svg {
      margin-right: 8px;
    }
  }
  & li:last-of-type {
    width: 118px;
    border-radius: 0px 8px 8px 0px;

    > a > span > svg {
      margin-left: 8px;
    }
  }
`;

export const ButtonPagination = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.blue600};
  line-height: 16px;

  > svg {
    stroke: ${({ theme }) => theme.color.blue200};
  }
`;
