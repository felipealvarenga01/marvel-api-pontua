import styled from '@emotion/styled';

export const TabsContainer = styled.div`
  background-color: #ffffff;
  padding: 17px 0px 0px 4px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 30px;
  margin-top: 6px;
  display: flex;
  border-bottom: 1px solid #eaecf0;
`;

export const TabsList = styled.ul`
  display: flex;
  gap: 15px;
  width: 100%;
`;

export const TabsItem = styled.li<{
  active?: boolean;
}>`
  list-style: none;
  border-bottom: 2px solid;
  border-bottom-color: ${({ active, theme }) =>
    active ? theme.color.primary : 'transparent'};
  padding-bottom: 17px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme, active }) =>
    active ? theme.color.primary : theme.color.gray500};
`;

export const TabCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 48px;
  overflow-y: auto;
  max-height: calc(100vh - 233px);

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 2.5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.blue600};
    border-radius: 2.5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.blue600};
  }
`;

export const TabInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabInfoAgentTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 24.6px;
  letter-spacing: -0.72px;
  font-family: 'Epilogue', 'Inter', sans-serif;
  color: #081b4e;
`;

export const TabInfoAgentDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24.6px;
  letter-spacing: -0.48px;
  font-family: 'Epilogue', 'Inter', sans-serif;
  color: #717171;
  margin-top: 8px;
`;

export const TabInfoAgentAvatar = styled.img`
  width: 124px;
  border-radius: 100%;
`;

export const TabInfoAgentContainer = styled.div`
  margin-left: 16px;
`;
