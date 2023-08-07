import styled from '@emotion/styled';

export const DivContainerSelect = styled.div`
  width: 100%;
  border: 1px solid grey;
  border-radius: 8px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #d0d5dd);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  margin-bottom: 16px;
  cursor: pointer;
`;

export const DivContainerAvatar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SelectedAgentContainer = styled.span<{
  agentSelected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${({ agentSelected }) => (agentSelected ? 500 : 400)};
  color: ${({ theme, agentSelected }) =>
    agentSelected ? '#101828' : theme.color.gray500};
  font-family: 'Inter', 'Epilogue', sans-serif;

  & svg,
  & img {
    margin-right: 8px;
  }

  & img {
    border-radius: 100%;
  }

  & span {
    font-family: 'Inter', 'Epilogue', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const SelectedAgent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 14px;
`;

export const AgentList = styled.ul`
  display: grid;
  grid-template-areas: '1fr';
  width: 100%;
  position: absolute;
  top: 52px;
  left: 0;
  overflow-y: scroll;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  border: 1px solid ${({ theme }) => theme.color.gray100};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  max-height: 180px;

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

export const Agent = styled.li<{
  agentSelected?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 10px 14px;
  background-color: ${({ theme, agentSelected }) =>
    agentSelected ? theme.color.gray100 : 'transparent'};

  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;

export const AgentThumbnailContainer = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 12px;

  margin-right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AgentThumbnail = styled.img`
  width: auto;
  height: 24px;
`;

export const AgentName = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Inter', 'Epilogue', sans-serif;
  color: #101828;
`;
